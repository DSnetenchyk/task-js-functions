var gallery = {
		images : [
			{
				"name": "cat",
				"path": "images/cat.png",
				"description": "The best cat ever",
				"date": "2014-07-21T09:05:34.540Z"
			},
			{
				"name": "dog",
				"path": "images/dog.png",
				"description": "The best dof ever",
				"date": "2014-07-21T09:06:05.544Z"
			},
			{
				"name": "giraffe",
				"path": "images/giraffe.png",
				"description": "",
				"date": "2014-07-21T09:07:24.187Z"
			},
			{
				"name": "dinosaur",
				"path": "images/dinosaur.png",
				"description": "The best dinosaur ever",
				"date": "2014-07-21T09:07:47.683Z"
			}
		]
	};

		function view(parameters) {
			for (var i = 0; i < parameters.images.length; i++) {
				console.log(parameters.images[i]);
			}
		}

		view(gallery);

		function append(parameters, name, path, description, date) {
			var newImg = {};
			newImg.name = name || "";
			newImg.path = path || "";
			newImg.description = description || "";
			newImg.date = Date.parse(date) || new Date();
			parameters.images.push(newImg);

		}

		append(gallery,'crocodile','images/crocodile.png',"Crocodile teeth klats-klats", Date.now());
		view(gallery);

		function redact(parameters, old_parameters, new_parameters) {
			for (var i = 0; i < parameters.images.length; i++) {
				if (parameters.images[i].name === old_parameters) {
					parameters.images[i].name = new_parameters;
				} else if (parameters.images[i].path === old_parameters) {
					parameters.images[i].path = new_parameters;
				} else if (parameters.images[i].description === old_parameters) {
					parameters.images[i].description = new_parameters;
				} else if(parameters.images[i].date === old_parameters) {
					parameters.images[i].date = new_parameters || new Date() ;
				}
			}
		}
		
		redact(gallery, 'Crocodile teeth klats-klats','Crocodile smile');
		view(gallery);

		function remove(parameters, slide) {

			for (var i = 0; i < parameters.images.length; i++) {
				if (parameters.images[i].name === slide) {
					parameters.images.splice(i,1); 
				}
			}
		}

		remove(gallery,'dinosaur');
		view(gallery);

		function select(parameters, methodSort) {
			parameters.images.sort(function campare(a, b){
				return a[methodSort] > b[methodSort];
			});	

		}
			select(gallery,'description');
			view(gallery);

			select(gallery,'name');
			view(gallery);

		
		function filter(parameters, name) {
			var imagesWithoutField;
			for (var i = 0; i < parameters.images.length; i++) {
				if (parameters.images[i][name] == '') {
					imagesWithoutField = parameters.images[i];
					console.log(imagesWithoutField);
				}
			}
		}
		filter(gallery, 'description');
		

		function string_object(parameters){

			var string = JSON.stringify(parameters,false, 1);
			console.log(string);

			var object = JSON.parse(string, function(key, value) {
				if (key == 'date') return new Date(value);
				return value;
			});
			console.log(object);
		}
		string_object(gallery);

		function serialization(parameters, serialization_parameters) {
			var serializatin_gallery = JSON.stringify(parameters.images, [serialization_parameters],1);
			console.log(serializatin_gallery)
		}
		serialization(gallery, 'name');

		function description(parameters){
			for (var i = 0; i < parameters.images.length; i++) {
				if (parameters.images[i].description === '') {
					console.log(parameters.images[i].name + " - with out description.");
				}
			}
		}
		description(gallery);

		
		var second_gallery = {
		images : [
				{
					"name": "Google",
					"path": "images/Google.png",
					"description": "Google browser",
					"date": "2014-07-21T09:05:34.540Z"
				},
				{
					"name": "Opera",
					"path": "images/Opera.png",
					"description": "Opera browser",
					"date": "2014-07-21T09:05:35.540Z"
				},
				{
					"name": "IE",
					"path": "images/IE.png",
					"description": "",
					"date": "2014-07-21T09:05:36.540Z"
				},
				{
					"name": "Safari",
					"path": "images/Safari.png",
					"description": "Safari browser",
					"date": "2014-07-21T09:05:37.540Z"
				},
				{
					"name": "Firefox",
					"path": "images/Firefox.png",
					"description": "",
					"date": "2014-07-21T09:05:38.540Z"
				}
			]
		};

		view(second_gallery);

		append(second_gallery,'Avant','images/Avant.png',"Avant browser", Date.now());
		view(second_gallery);

		redact(second_gallery, "Avant",'Old Avant browser');
		view(second_gallery);

		remove(second_gallery,'Safari');
		view(second_gallery);

		filter(second_gallery, 'description');

		string_object(second_gallery);

		serialization(second_gallery, 'name');

		description(second_gallery);