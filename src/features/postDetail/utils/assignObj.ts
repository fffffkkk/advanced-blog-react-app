export const assignObj = (obj1: object, objs: object[]) => {
	return Object.assign(obj1, ...[...objs]);
};
