db = connect('localhost:27017/task');

db.tasks.insertMany(
	[
		{
			"_id": "1",
			"title": "shopping",
			"description": "go for shopping",
			"createdBy": "kamal",
			"whenCreated": "3-10-2021:12:12:30"
		},
		{
			"_id": "2",
			"title": "cooking",
			"description": "go for ",
			"createdBy": "kamal",
			"whenCreated": "3-10-2021:12:12:30"
		},
		{
			"_id": "d413cb02-2abd-4cd9-91cb-04270d059675",
			"title": "Shopping",
			"description": "will go shopping midday",
			"createdBy": "kamal",
			"whenCreated": "Date.now()",
			"whenUpdated": "Date.now()"
		}
	]
);