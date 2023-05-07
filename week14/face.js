import * as THREE from 'three';
      import { MindARThree } from 'mindar-face-three';

window.addEventListener("DOMContentLoaded", (async)=> {

   const mindarThree = new MindARThree({
  container: document.body,
      });
      const {renderer, scene, camera} = mindarThree;

      

      const anchor2 = mindarThree.addAnchor(10);



          var lightOne=new THREE.Amblientlight(0xffffbb,0xccccc,1);
          scene.add (light);

          const loader = new GLTFLoader();

          loader.load(
            "../assets/fur_tree.glb",
            function (gltf){
              gltf.scene.position.z=0.5;
              gltf.scene.rotation.y=+-Math.PI/4;
              //scene.add ();
               anchor2.group.add(gltf.scene);

            },
            function (xhr) {
              consol.log((xhr.loaded/xhr.total*100)+'%loaded');
            }

            function(error){
              consol.log ('An error happened');
            }
            );


           const faceMesh = mindarThree.addFaceMesh();
      const texture = new THREE.TextureLoader().load('/./assets/my_face.png');
      faceMesh.material.map = texture;
      faceMesh.material.transparent = true;
      faceMesh.material.needsUpdate = true;
      scene.add(faceMesh);
      faceMash.material.wireframe=true;
      scene.add (faceMesh);
      //anchor.group.add();

      await mindarThree.start();

      renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
    
      

});
     
     