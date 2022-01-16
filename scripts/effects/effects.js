let angle = 0

export const addRandomStars = (scene) =>{
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color:0xffffff})
    const star = new THREE.Mesh(geometry,material)
    star.name = "Star"
    const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(800) )
    //console.log(x)
   // console.log(y)
   // console.log(z)
    star.position.set(x,y,z);
    scene.add(star)
}

export const addRandomPresent = (scene,loader) =>{
    let present ;
  
    const [x,y,z] = Array(3).fill().map(()=> Math.abs(THREE.MathUtils.randFloatSpread(10)) )         

    loader.load("./../game_ready_present_3_low_poly/scene.gltf",(gltf)=>{
                
    

        present = gltf.scene.children[0]
         
           try{
     
            present.scale.set(0.1,0.1,0.1);
           
            present.position.set(x,y,z);
            present.name = "Present"
            
           }catch{

           }
      

          scene.add(gltf.scene);
       })

}

export  const rotateObject = (object,range = 0.05,target = null) =>{
    
try{

    object.position.set(target.position.x,target.position.y + 40,target.position.z)

  
    object.position.x += (range * Math.cos(angle)) 
    object.position.z += (range * Math.sin(angle)) 
    angle += Math.PI/(270*2)

}
catch{
    console.log("rotateObject error")
}
    console.log(`Z:${object.position.z}`)
    console.log(`X:${object.position.x}`)
    console.log(`angle:${angle}`)
    
}


export const RotateSceneMode = (camera,targetLook,range) => {
    camera.lookAt( targetLook.position );   
    rotateObject(camera,range,targetLook)
}