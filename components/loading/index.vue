<template>
  <!--  <transition name="popup">-->
  <!--    <div class="loading" v-if="state">-->
  <!--      loading-->
  <!--    </div>-->
  <!--    <slot v-else></slot>-->
  <!--  </transition>-->
  <transition name="fadeIn">
    <slot name="loading" v-if="state">
      <div class="loading" >
        <div class="loading-icon"></div>
        <span class="loading-text">{{loadingText}}</span>
      </div>
    </slot>
    <slot v-else></slot>
  </transition>
</template>

<script>
    export default {
        name: 'loading',
        props: {
            loadingText: {
                type: String,
                default: '数据加载中....'
            },
            state: {
                type: Boolean
            }
        },
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
  .loading {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 0;

    .loading-icon {
      display: inline-block;
      margin-bottom: 10px;
      width: 80px;
      height: 80px;
      color: #1E88E5;
      /*ff4500*/
      /*009c3f*/
      vertical-align: middle;
      pointer-events: none;
      transform: rotateZ(45deg);
      perspective: 1000px;
      border-radius: 50%;
      opacity: 1;

      &.fadeIn-enter-active,
      &.fadeIn-leave-active {
        transition: all .35s ease;
      }

      &.fadeIn-enter,
      &.fadeIn-leave-to {
        opacity: 0;
      }

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        border-radius: 50%;
        -webkit-animation: 1s spin linear infinite;
        animation: 1s spin linear infinite;
      }

      &::before {
        -webkit-transform: rotateX(70deg);
        transform: rotateX(70deg);
      }

      &::after {
        -webkit-transform: rotateY(70deg);
        transform: rotateY(70deg);
        -webkit-animation-delay: .4s;
        animation-delay: .4s;
      }

    }

    .loading-text {
      letter-spacing: 1px;
      color: #616161
    }
  }


  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: translate(-50%, -50%) rotateZ(0deg);
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotate {
    0% {
      -webkit-transform: translate(-50%, -50%) rotateZ(0deg);
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotateZ(360deg);
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @-webkit-keyframes rotateccw {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(-360deg);
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes rotateccw {
    0% {
      -webkit-transform: translate(-50%, -50%) rotate(0deg);
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(-360deg);
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @-webkit-keyframes spin {
    0%, 100% {
      box-shadow: .2em 0 0 0 currentcolor;
    }
    12% {
      box-shadow: .2em .2em 0 0 currentcolor;
    }
    25% {
      box-shadow: 0 .2em 0 0 currentcolor;
    }
    37% {
      box-shadow: -.2em .2em 0 0 currentcolor;
    }
    50% {
      box-shadow: -.2em 0 0 0 currentcolor;
    }
    62% {
      box-shadow: -.2em -.2em 0 0 currentcolor;
    }
    75% {
      box-shadow: 0px -.2em 0 0 currentcolor;
    }
    87% {
      box-shadow: .2em -.2em 0 0 currentcolor;
    }
  }

  @keyframes spin {
    0%, 100% {
      box-shadow: .2em 0 0 0 currentcolor;
    }
    12% {
      box-shadow: .2em .2em 0 0 currentcolor;
    }
    25% {
      box-shadow: 0 .2em 0 0 currentcolor;
    }
    37% {
      box-shadow: -.2em .2em 0 0 currentcolor;
    }
    50% {
      box-shadow: -.2em 0 0 0 currentcolor;
    }
    62% {
      box-shadow: -.2em -.2em 0 0 currentcolor;
    }
    75% {
      box-shadow: 0px -.2em 0 0 currentcolor;
    }
    87% {
      box-shadow: .2em -.2em 0 0 currentcolor;
    }
  }
</style>

