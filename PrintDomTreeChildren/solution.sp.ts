const deep = (node = document.body, nodeList = []) => {
	nodeList.push(node);
	const children = node.children;

	for (let i = 0; i < children.length; i++) {
		deep(children[i], nodeList)
	};
	return nodeList;
}

const wide = (node = document.body) => {
	const nodeList = [];
	const sibilingList = [];
	sibilingList.unshift(node);

	while (sibilingList.length > 0) {
		const item = sibilingList.shift(); 
		nodeList.push(item);
		const children = item.children;
		for (let i = 0; i < children.length; i++) {
			sibilingList.push(children[i])
		};
	}
	return nodeList;
}