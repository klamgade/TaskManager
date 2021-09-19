db = connect('localhost:27017/task');

db.tasks.insertMany([
	{
		_id: 'd413cb02-2abd-4cd9-91cb-04270d059675',
		title: 'Shopping',
		description: 'will go shopping midday',
		createdBy: 'kamal',
		whenCreated: Date.now(),
		whenUpdated: Date.now(),
	},
]);