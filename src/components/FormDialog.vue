<template>
  <el-dialog
    :visible="visiable"
    :title="dialogTitle"
    :close-on-click-modal="false"
    @close="handleCancel"
  >
    <slot></slot>
    <div slot="footer" v-if="showFooter">
      <el-button @click="handleCancel">{{ $t('cancel') }}</el-button>
      <el-button type="primary" @click="handleConfirm">{{
        $t('confirm')
      }}</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'FormDialog',
  props: {
    visiable: {
      type: Boolean,
      defalue: false
    },
    dialogTitle: {
      type: String
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dialogShow: false,
    }
  },
  methods: {
    handleConfirm () {
      this.$emit('submit')
    },
    handleCancel () {
      this.$emit('update:visiable', false)
    }
  }

}
</script>

<style>
</style>