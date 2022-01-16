    
    import {OrbitControls} from "./OrbitControls.js"       
     import "./effects/effects.js"
     import {addRandomStars,rotateObject,addRandomPresent,RotateSceneMode} from "./effects/effects.js"
     import "./GLTFLoader.js"
     import "./FontLoader.js"
     import "./TextGeometry.js"
     import {reviewActive,reviewInactive,resetCamera}from"./review/reviewController.js"

 

            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            const scene = new THREE.Scene(); 
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            const controls = new OrbitControls(camera,renderer.domElement)
            export let isRotateScene = false;

            window.addEventListener("load",()=>{
                resetCamera(camera)
            
                document.querySelector(".get_review_scene").addEventListener("click",reviewActive)

                document.querySelector(".off_review_event").addEventListener("click",()=>reviewInactive(camera))      

                document.querySelector(".rotation_scene").addEventListener("click",()=>{
                  isRotateScene = !isRotateScene              
                  document.querySelector(".rotation_scene").classList.toggle("autoRotateSceneActive");
                })
            })
           // controls.enabled = false;
            //const gridHelper = new THREE.GridHelper(200,50)
            //Camera pos
            
  
            //render setup
            renderer.setSize( window.innerWidth, window.innerHeight );
		      	document.body.appendChild( renderer.domElement );

          
           


           // const geometry = new THREE.SphereGeometry( 2, 32, 16 );
           // const material = new THREE.MeshStandardMaterial ( { color: 0xff0000,wireframe:true } );
           // const sphere = new THREE.Mesh( geometry, material );
          //  sphere.visible = false


        const plane = new THREE.Mesh(new THREE.PlaneGeometry(1500, 1500), new THREE.MeshPhongMaterial({ color: 0xFFFAFA }));
        plane.rotation.x = - Math.PI / 2
        plane.receiveShadow = true
        scene.add(plane);
                
        scene.add(plane/* ,gridHelper*/);

  
          
			  //light
              const pointLight = new THREE.PointLight(0xffffff,1)
              pointLight.position.set(2, 50, 215);
         
              scene.add(pointLight);
             
              const sphereSize = 1;
              const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
              scene.add( pointLightHelper );


             // const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
             // directionalLight.position.set(2, 50, 215);
             // scene.add( directionalLight );

              
            //  const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
            //  scene.add( helper );



              Array(1000).fill().forEach(()=>addRandomStars(scene))

              let stars = scene.children.filter(item=>item.name === "Star")

             
         
             
              
            ////GLTF


              let loader = new THREE.GLTFLoader()
             // Array(50).fill().forEach(()=>addRandomPresent(scene,loader))
              
         
         



              let snowmanInSphere,
                  santaTransport ,
                  christmasTree
       

                  ///SNOWMAN_BALL
              loader.load("../assets/models/christmas_snowman_ball/scene.gltf",(gltf)=>{
                  
        

                  snowmanInSphere = gltf.scene.children[0]
              
                  try{
                  snowmanInSphere.position.set(camera.position.x-20,camera.position.y-20, camera.position.z-30);
                  snowmanInSphere.scale.set(200,200, 200);
                  }catch{

                  }
         

                 scene.add(gltf.scene);
              })

              ///SANTA_TRANSPORT
              loader.load("../assets/models/santa_clauss_sleigh/scene.gltf",(gltf)=>{
                  
            
                santaTransport = gltf.scene.children[0]
            
                   try{
                    santaTransport.position.set(15,15, 14);
                    santaTransport.scale.set(0.1,0.1,0.1);
                    santaTransport.rotation.z=56
                   }catch{
 
                   }
                   
     
 
                  scene.add(gltf.scene);
               })

               // Tree
               loader.load("../assets/models/christmas_tree_3d_scan/scene.gltf",(gltf)=>{
                christmasTree = gltf.scene.children[0]
               
                   try{
                    christmasTree.position.set(-150,0, -100);
                    christmasTree.scale.set(0.05,0.05,0.05);
                    christmasTree.rotation.z=56
                   }catch{
                      console.log("TREE ERROR_GLTF")
                   }
                   
     
 
                  scene.add(gltf.scene);
               })




              //  loader.load("../assets/models/game_ready_present_3_low_poly/scene.gltf",(gltf)=>{
                  
                
              
 
              //   present = gltf.scene.children[0]
              //      //snowmanInSphere.position.z = 14
              //      try{
              //       present.position.set(50,50,50);
              //       present.scale.set(0.1,0.1,0.1);
                    
              //      }catch{
 
              //      }
                   
     
              //     scene.add(gltf.scene);
              //  })



               //TEXT
               const loaderFont = new THREE.FontLoader();
               let textMesh
               loaderFont.load( '../assets/fonts/helvetiker_regular.typeface.json', function ( font ) {
               
                 const geometry = new THREE.TextGeometry( 'Happy new Year!', {
                   font: font,
                   size: 12,
                   height: 5,
                   curveSegments: 12,
                   bevelEnabled: true,
                   bevelThickness: 10,
                   bevelSize: 8,
                   bevelOffset: 0,
                   bevelSegments: 5
                 } );
               
                 let textMaterial = new THREE.MeshPhongMaterial( 
                  { color: 0xff0000, specular: 0xffffff }


              );
          
          
          
               textMesh = new THREE.Mesh(geometry, textMaterial);
          
               textMesh.position.x = -20
               textMesh.position.y = 60
               textMesh.position.z = -50
               textMesh.rotation.y = -0.3
               console.log(textMesh)
              scene.add(textMesh);
                })

         


/// UPDATE
			function animate() {
       
        try{
				requestAnimationFrame( animate );
                stars.forEach(item=>{
                    item.position.y -= Math.random() * 0.5
                    if(item.position.y<=-100) item.position.y = 100
                })

                  isRotateScene && RotateSceneMode(camera,snowmanInSphere,150);
                
                 rotateObject(pointLight,100,snowmanInSphere)
                //rotateObject(snowmanInSphere,10)
               // camera.lookAt( snowmanInSphere.position );
               
                //rotateObject(camera,snowmanInSphere,150)
                 snowmanInSphere.rotation.z +=0.001
               
                renderer.render( scene, camera );
                controls.update()
              }catch{
                  console.error("ERROR RENDER")
              }       
			};

            animate();
            
          
             
        