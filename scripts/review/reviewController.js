


const mainWrapper = document.querySelector(".out_date_render")

const displayOffReview = document.querySelector(".off-review")

export const DEFAULT_PRESET_CAMERA = {
    position:{
      x:10,y:35,z:115
    },
    rotation:{
      x:0,y:0,z:0
    }
  }
   

export const resetCamera = (camera) =>{
    const {position} = DEFAULT_PRESET_CAMERA
    const {rotation} = DEFAULT_PRESET_CAMERA

    camera.position.set(position.x,position.y,position.z)
    camera.rotation.set(rotation.x,rotation.y,rotation.z)
  }


export const reviewActive = () =>{
    mainWrapper.style.transform = "translateY(-100%)" ;
    displayOffReview.style.display = "block";
}

export const reviewInactive = (camera) =>{

   resetCamera(camera);

    setTimeout(()=>{
        mainWrapper.style.transform = "translateY(0%)" ;
        displayOffReview.style.display = "none";
    },800)
}






