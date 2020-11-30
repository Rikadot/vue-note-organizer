<template>
  <div class="general">
    <div class="layoutPageOuter">
      <div class="navbar">
        <button id = "button-round">
                I1
        </button>
        <button id = "button-round">
                I2
        </button>
      </div>
      <div class="layoutPageInner">
        <Header>
          Header
        </Header>
        <main>
          here goes the page content
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum
            dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta
            nobis eleifend option congue nihil imperdiet doming id quod mazim
            placerat facer possim assum. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
          </p>
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "Page"
};
</script>

<style scoped>
.general {
  font: 1.5em sans-serif;
  color: var(--textcolor, white);
}
.layoutPageOuter {
  display: grid;
  grid-template-columns: minmax(60px, 5%) 1fr;
}

.layoutPageInner {
  display: grid;
  grid-template-rows: minmax(60px, 5%) 1fr;
}

.navbar {
  background-color: var(--dark, darkgreen);
  height: auto;
}

header {
  padding: 0.5em;
  background-color: var(--light, green);
}

main {
  padding: 0.5em;
  background-color: var(--mid, darkblue);
}
</style>
