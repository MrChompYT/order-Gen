<script>
document.querySelectorAll('.carousel').forEach(carousel=>{
  const track=carousel.querySelector('.carousel-track');
  const cards=carousel.querySelectorAll('.carousel-card');
  let index=0;
  function update(){
    const cardWidth=cards[0].offsetWidth+24;
    track.style.transform=`translateX(${-index*cardWidth}px)`;
  }
  carousel.querySelector('.carousel-arrow.left').addEventListener('click',()=>{
    index=Math.max(index-1,0);update();
  });
  carousel.querySelector('.carousel-arrow.right').addEventListener('click',()=>{
    index=Math.min(index+1,cards.length-1);update();
  });
});
</script>