<template>
  <li class="zz-submenu"
      :class="[{'is-opened': opened,'is-active':active}]"
      @mouseenter="mouseenterHandle"
      @mouseleave="mouseleaveHandle">
    <a href="javascript:;" class="menu-link">
      <div class="zz-submenu__title"
           @click="handleSubTitleClick">
        {{item.name}}
        <i
          class="zz-submenu__icon-arrow"
          :class="[submenuTitleIcon]"></i>
      </div>
    </a>
    <!--popover-->
    <transition :name="menuTransitionName">
      <div
        @mouseenter="($event)=>{mouseenterHandle($event,100)}"
        @mouseleave="mouseleaveHandle"
        class="zz-popover-menu zz-menu--horizontal"
        v-show="opened"
        :class="[popperClass]"
        ref="popper">
        <ul class="zz-menu zz-menu--popup">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>
<script>
  import PopperJS from 'popper.js'

  export default {
    name: 'zz-submenu',
    inject: ['rootMenu'],
    props: {
      item: {
        type: Object,
        default: () => {
          return {
            name: '',
            link: {},
            sub: []
          }
        }
      },
      firstLevel: {
        type: Boolean
      },
      index: {
        type: String,
        default: ''
      },
      showTimeout: {
        type: Number,
        default: 300
      },
      hideTimeout: {
        type: Number,
        default: 300
      },
      transformOrigin: {
        type: [Boolean, String],
        default: true
      },
      popperOptions: {
        type: Object,
        default() {
          return {
            modifiers: {computeStyle: {gpuAcceleration: false}},
          };
        }
      },
      popperClass: String,
    },
    data() {
      return {
        timeout: null,
        mouseInChild: false,
        menuTransitionName: 'el-zoom-in-top',
        popperJS: null,
        submenus: {},
        items: {},
        popperElm: null,
        referenceElm: null
      }
    },
    computed: {
      currentPlacement() {
        return this.firstLevel ? 'bottom' : 'right-start'
      },
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1
      },
      submenuTitleIcon() {
        return this.firstLevel ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
      },
      active() {
        return this.index === this.rootMenu.activeIndex;
      },
    },
    methods: {
      createPopper(reference, popper) {
        let options = this.popperOptions;
        options.placement = this.currentPlacement
        if (this.firstLevel) {
          document.body.appendChild(popper)
        }
        if (this.popperJS && this.popperJS.destroy) {
          this.popperJS.destroy()
        }
        this.popperJS = new PopperJS(
          reference,
          popper,
          options
        )
      },
      updatePopper(reference, popper) {
        const popperJS = this.popperJS;
        if (popperJS) {
          popperJS.update();
        } else {
          this.createPopper(reference, popper);
        }
      },
      mouseenterHandle(event, showTimeout = this.showTimeout) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath)
        }, showTimeout)
      },
      mouseleaveHandle() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index)
        }, this.hideTimeout)
      },
      initPopper() {
        this.referenceElm = this.$el;
        this.popperElm = this.$refs.popper;
      },
      handleSubTitleClick() {
        this.rootMenu.handleItemClick(this)
      }
    },
    mounted() {
      this.initPopper()
    },
    beforeDestroy() {
      if (this.popperElm && this.popperElm.parentNode === document.body) {
        document.body.removeChild(this.popperElm);
      }
    },
    watch: {
      opened(val) {
        if (val) {
          this.updatePopper(this.referenceElm, this.popperElm)
        }
      }
    }
  }
</script>


<style lang="scss">
  .zz-submenu.is-opened > a .zz-submenu__title .zz-submenu__icon-arrow {
    transform: rotate(180deg);
  }
</style>
