<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
.button {
  font: inherit;
  cursor: pointer;  
  /* background-color: black;
  color: white;
  padding: 5px;
  border: 1px solid black; */
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;  
}

.button:hover,
.button:active {
  color: #fff;
  background-color: #3b8070;  
  /* background-color: rgb(51, 51, 51);
  border: 1px solid black; */
}

.inverted {
  /* background-color: white;
  color: black;
  border: 1px solid transparent; */
  background-color: #3b8070;
  color: white;
  
}

.inverted:hover,
.inverted:active {
  /* color: #ccc;
  background-color: white;
  border: 1px solid transparent; */
  background-color: #41B883;

}

.cancel {
  /* background-color: red;
  color: white;
  border: 1px solid transparent; */
  
  color: red;
  border: 1px solid red;
}

.cancel:hover,
.cancel:active {
  /* background-color: salmon;
  border: 1px solid transparent; */
  background-color: red;
  color: white;
}
.normal {
  /* background-color: red;
  color: white;
  border: 1px solid transparent; */
  
  color: #35495e;
  border: 1px solid #35495e;
}

.normal:hover,
.normal:active {
  /* background-color: salmon;
  border: 1px solid transparent; */
  background-color: #35495e;
  color: white;
}
</style>
