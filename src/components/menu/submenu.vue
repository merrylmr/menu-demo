<template>
  <li class="zz-submenu"
      :class="[{'is-opened': opened}]"
      @mouseenter="mouseenerHandle"
      @mouseleave="mouseleaveHandle">
    <a href="#">
      <div class="zz-submenu__title">
        {{item.name}}
        <i
          class="zz-submenu__icon-arrow"
          :class="[submenuTitleIcon]"></i>
      </div>
    </a>
    <!--popover-->
    <transition :name="menuTransitionName">
      <div
        @mouseenter="($event)=>{mouseenerHandle($event,100)}"
        @mouseleave="mouseleaveHandle"
        class="zz-popover-menu zz-menu--horizontal"
        v-show="opened"
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

  const stop = e => e.stopPropagation()
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
    },
    data() {
      return {
        timeout: null,
        mouseInChild: false,
        menuTransitionName: 'el-zoom-in-top',
        popperJS: null,
        submenus: {},
        items: {}
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
        let isActive = false
        const submenus = this.submenus
        const items = this.items

        Object.keys(items).forEach(index => {
          if (items[index].active) {
            isActive = true
          }
        })

        Object.keys(submenus).forEach(index => {
          if (submenus[index].active) {
            isActive = true
          }
        })

        return isActive
      },
    },
    methods: {
      createPopper(reference, popper, options = {}) {
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
        popper.addEventListener('click', stop)
      },
      mouseenerHandle(event, showTimeout = this.showTimeout) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath)
          this.createPopper(this.$el, this.$refs['popper'], {
            placement: this.currentPlacement
          })
        }, showTimeout)
      },
      mouseleaveHandle() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index)
        }, this.hideTimeout)
      }
    },
  }
</script>


<style lang="scss">
  .zz-submenu.is-opened > a .zz-submenu__title .zz-submenu__icon-arrow {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
