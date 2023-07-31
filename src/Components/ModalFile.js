import React from 'react'

export default function ModalFile() {
  return (
    <div>
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       




      <h1>Where would you like to sell?</h1>

  <p>Pick as many as you like – you can always change these later. We'll make sure you're set up to sell in these places.

</p>
  <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">An online store</label><br/>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">Social media</label><br/>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">Online marketplaces</label>
 

  




       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
