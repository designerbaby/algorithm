// 数组转树
function convertToTree(data) {
  const map = data.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
  console.log("map:", map);
  const result = [];
  for (const key in map) {
    const item = map[key];
    if (item.parentId === null) {
      result.push(item);
    } else {
      const parent = map[item.parentId];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(item);
      }
    }
  }
  return result;
}

const array = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 0 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 }
];

const obj = convertToTree(array);
console.log("obj:", JSON.stringify(obj));
