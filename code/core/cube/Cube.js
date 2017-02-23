ENOMOURS.Cube = function () {

	_size = GlobalConfig.METER_UNIT;

	_cubeGeometry = new THREE.BoxGeometry( _size, _size, _size );
	_cubeMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff40, overdraw: 0.5 } );

	_voxel = new THREE.Mesh( cubeGeometry, cubeMaterial );
	_voxel.position.copy( intersect.point ).add( intersect.face.normal );
	_voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );

	this.getVoxel = function() {
		return _voxel;
	};

	this.setMaterial(material) {
		_cubeMaterial = material;
	};
};