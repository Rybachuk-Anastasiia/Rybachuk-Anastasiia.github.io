//import as * THREE from'../three/three.module.js';
import *as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import{GTFLoader} from 'three/addons/loaders/GTFLoader.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { MapControls } from 'three/addons/controls/MapControls.js';
var renderer, cube, lightTwo, scene, camera, controls;
function init()
{
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


if(document.getElementById('OrbitControls').checked)
{
			controls = new OrbitControls( camera, renderer.domElement );
			controls.autoRotate=true;
			controls.autoRotateSpeed =5;
}

if(document.getElementById('FlyControls').checked)
{
			controls = new FlyControls( camera, renderer.domElement );
			controls.autoForward=true;
			controls.movementSpeed = 0.5;
			controls.rollSpeed =0.005
}

if(document.getElementById('MapControls').checked)
{
			const controls = new MapControls( camera, renderer.domElement );
			controls.enableDamping = true;










var loader = new THREE.TextureLoader();
const boxgeometry = new THREE.BoxGeometry( 1, 1, 1 );
/*const boxmaterials = [
					new THREE.MeshBasicMaterial( { color: Math.randonm() *0x00ff00 } ),
					new THREE.MeshBasicMaterial( { color: Math.randonm() *0x00ff00 } ),
					new THREE.MeshBasicMaterial( { color: Math.randonm() 
					*0x00ff00 } ),
					new THREE.MeshBasicMaterial( { color: Math.randonm() *0x00ff00 } ),
					new THREE.MeshBasicMaterial( { color: Math.randonm() *0x00ff00 } ),
					new THREE.MeshBasicMaterial( { color: Math.randonm() *0x00ff00 } )
];	
*/		

const boxmaterials = [
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube1.png' ) } ),
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube2.png' ) } ),
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube3.png' ) } ),
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube4.png' ) } ),
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube5.png' ) } ),
					new THREE.MeshBasicMaterial( { map: loader.load('/assets/cube6.png' ) } ),
];	












 cube = new THREE.Mesh( boxgeometry, boxmaterials         );
scene.add( cube );

const cylgeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 ); 
const cylmaterial = new THREE.MeshLambertMaterial( {color: 0xffff00} ); 
const cylinder = new THREE.Mesh( cylgeometry, cylmaterial ); 
scene.add( cylinder );

cylinder.position.z =-25;
cylinder.position.x =5;



var lightOne=new THREE.AmbientLight(0xffff, 0.5);
scene.add(lightOne);

lightTwo=new THREE.PointLight(0xffff, 0.5);
scene.add(lightTwo);
lightTwo.position.set(25,0, -25)

//напівсферичне освітлення
var lightThree  = new THREE.HemisphereLight(0xfffff, 0x080820, 1);
scene.add(lightThree);



const texture = loader.load('/assets/plants.jpg' );
const video = document.getElementById( 'video' );
video.play();
const texture = new THREE.VideoTexture( video );

var planegeometry=new THREE.PlaneGeometry(10, 10);
var planematerial=new THREE.MeshBasicMaterial({color:0xffff, map:texture});
var planemesh=new THREE.Mesh(planegeometry, planematerial);
planemesh.position.set(0, -20, -100);
planemesh.scale.set (10 10 10);
scene.add(planemesh);



const video2 = document.getElementById( 'video2' );
video.play();
const texture2 = new THREE.VideoTexture( video2 );
cylmaterial.map=texture2;
//const beach = loader.load('/assets/360-panorama-matador-seo.jpg' );
//cylmaterial.map=beach;

cube.scale.set (3 3 3 );
cube.position.x-1;




camera.position.z = 7;
camera.position.x = 2;
controls.update();

renderer.setClearColor (0x55555);
renderer.clear();


const modelloader =new GTFLoader();
modelloader.loader('/assets/to/fur_tree.glb',function(gltf){
	scene.add(gltf.scene);
	gltf.scene. position.set(-5,2,0);
	gltf.scene. scale.set(2,2,3);
}, function ( xhr ) {
	console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},. function(error){
	console.error(error);

});
const timer =new THREE.Clock ();

let angle=0, radius=47;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    camera.position.z=radius*Math.cos(angle)+5;
    camera.position.x=radius*Math.sin(angle);




    if(document.getElementById('OrbitControls').checked || if(document.getElementById('MapControls').checked))
    	control.update();
    if(document.getElementById('FlyControls').checked)
    	control.update(timer.getDelta());

    angle+=Math.PI/180;

}


const startButton=document.getElementById('press');






startButton.addEventLister('click', function(){
	//startButton.style.display="none";
	document.querySelector("fieldset").style.display="none";
animate();
init();
});