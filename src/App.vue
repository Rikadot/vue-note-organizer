<template>
  <router-view />
</template>

<style>
:root {
  --dark: #3f5d6c;
  --mid: #5d7c89;
  --light: #95bac5;
  --textcolor: #ededfc;
  --highlight: #7182c7;
  --althighlight: #516fe6;
}

#button-round{
  color:var(--textcolor);
  background-color: var(--highlight);
  border-radius: 50%;
  border-style: none;
  text-align: center;
  font: 1.2em sans-serif;
  cursor: pointer;
  padding: 15px;
  margin-top: 10px;
  width: 2em;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
