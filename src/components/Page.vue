<template>
<div class = "general">
    <div class = "layoutPageOuter">        
        <div class = "navbar">
            <p>
                test
            </p>   
        </div>
        <div class = "layoutPageInner">
            <header>
                Header
            </header>
            <main>
               here goes the page content 
            </main>       
        </div>    
    </div>
</div>    
</template>

<script lang="ts">
import Vue from "vue";
export default ({
  name: "Page",
});
</script>

<style>
    .general{
        font: 1.5em sans-serif;
        color: white;
    }
    .layoutPageOuter{
        display: grid;
        grid-template-columns: minmax(40px, 10%) 1fr;
    }

    .layoutPageInner {
        display: grid;
        grid-template-rows: minmax(40, 5%) 1fr;
        background-color: darkblue;
        place-items: center;
    }

    .navbar{
        background-color: darkgreen;
    }
</style>