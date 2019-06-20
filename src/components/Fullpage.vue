<template>
  <div>
    <full-page ref="fullpage"
               :options="options">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
    <!--<full-page ref="fullpage"-->
               <!--:options="options1">-->
      <!--<div class="section">-->
        <!--First section ...-->
      <!--</div>-->
      <!--<div class="section">-->
        <!--Second section ...-->
      <!--</div>-->
      <!--<div class="section">-->
        <!--Second section ...-->
      <!--</div>-->
    <!--</full-page>-->
  </div>

</template>

<script>
  export default {
    data() {
      return {
        options: {
          anchors: ['firstPage', 'secondPage', '3rdPage'],
          sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
          navigation: true,
          navigationPosition: 'right',
          navigationTooltips: ['First page', 'Second page', 'Third and last page']
          // scrollBar: true
        },
        options1: {
          anchors: ['4', '5', '6'],
          sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
          navigation: true,
          navigationPosition: 'right',
          navigationTooltips: ['4', '5', '6']
          // scrollBar: true
        },
      }
    }
  }
</script>
