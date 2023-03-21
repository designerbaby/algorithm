function createAsyncWorker(capacity) {
  // 当前运行中的任务数量
  let runningSize = 0
  // 任务队列
  const queue = []

  function run() {
    // 当前运行的任务大于限制数则返回
    if (runningSize >= capacity) return
    // 取出队列第一个
    const task = queue.shift()
    if (task) {
        // 运行数量+1
        runningSize += 1
        task().finally(() => {
            // 运行完成数量-1， 并且继续运行队列
            runningSize -= 1
            run()
        })
        console.log(`运行中:${runningSize}`)
        // 立马继续运行
        run()
    }
  }

  return function executor(task) {
    queue.push(task)
    return Promise.resolve(true).then(() => run())
  }
}

function testCreateAsyncWorker(createParallelTaskExecutorImpl) {
  const assert = require('assert');
  const executor = createParallelTaskExecutorImpl(2);
  const runTask = (id, delay, expectedDelay, fail) => {
    const start = Date.now();
    const check = (rejected) => (v) => {
      assert.strictEqual(rejected, fail, `promise status of task ${id} should be ${fail}, received ${rejected}`);
      const realDelay = Date.now() - start;
      assert.strictEqual(
        Math.round(realDelay / 100) * 100,
        expectedDelay,
        `delay of task ${id} should be ${expectedDelay}, received ${realDelay}`,
      );
      assert.strictEqual(
        v,
        delay,
        `${rejected ? 'error of rejected' : 'result of resolved'} task ${id} should be ${delay}, received ${v}`,
      );
    };
    executor(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (fail) {
              reject(delay);
            } else {
              resolve(delay);
            }
          }, delay);
        }),
    )
      .then(check(false), check(true))
      .catch((e) => {
        console.error(e);
      });
  };
  runTask(1, 100, 100, false);
  runTask(2, 200, 200, true);
  runTask(3, 300, 400, false);
  runTask(4, 400, 600, true);
  runTask(5, 100, 500, false);
  runTask(6, 200, 700, true);
  runTask(7, 100, 700, false);
  runTask(8, 200, 900, false);
}

try {
  testCreateAsyncWorker(createAsyncWorker);
} catch (error) {
  console.error(error);
}