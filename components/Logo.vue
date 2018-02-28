<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"></div>
    <div class="Triangle Triangle--one"></div>
    <div class="Triangle Triangle--three"></div>
    <div class="Triangle Triangle--four"></div>
  </div>
</template>

<style>
.VueToNuxtLogo
{
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 60px;
  width: 85px;
}
.Triangle
{
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
.Triangle--one
{
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #41B883;
}
.Triangle--two
{
  top: 10px;
  left: 10px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid #3B8070;
}
.Triangle--three
{
  top: 20px;
  left: 10px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid #35495E;
}
.Triangle--four
{
  top: 40px;
  left: 25px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
@keyframes godown {
  100% {
    top: 60px;
  }
}
@keyframes goright {
  100% {
    left: 25px;
  }
}
</style>
