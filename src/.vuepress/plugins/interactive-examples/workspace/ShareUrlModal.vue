<template>
  <Modal :show="show" @close="$emit('close')">
    <template v-slot:header>分享链接</template>
    <input ref="urlInput" type="text" :value="urlForSharing" class="url-for-sharing" onfocus="this.select()" />
    <button @click="copyToClipboard">复制</button>
    <div v-show="successNotification" class="success-notification">{{ successNotification }}</div>
  </Modal>
</template>
<script lang="js">
  import Modal from "../../../private-components/Modal.vue";
  import Vue from "vue";

  export default {
    components: { Modal },
    props: {
      urlForSharing: { type: String, required: false, default: null }
    },
    data() {
      return {
        successNotification: null
      };
    },
    computed: {
      show() {
        return this.$props.urlForSharing != null;
      }
    },
    watch: {
      show() {
        Vue.nextTick(() => this.$refs.urlInput.select());
      }
    },
    methods: {
      copyToClipboard() {
        this.$refs.urlInput.select();
        document.execCommand("copy");
        this.notifySuccess("URL has been copied to clipboard");
      },
      notifySuccess(message) {
        this.$data.successNotification = message;
        setTimeout(() => this.successNotification = null, 2000);
      },

      askQuestion() {
        const issueBody = `
* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**

# Example link

${this.$props.urlForSharing}

# Question

`;
        document.location.href = `https://github.com/handlebars-lang/handlebars.js/issues/new?body=${encodeURIComponent(issueBody)}`;
      },
      fileBug() {
        const issueBody = `
* [ ] This is NOT a security issues!! If it is, please file a report at https://www.npmjs.com/advisories/report?package=handlebars**

# Bug description

# Example link

${this.$props.urlForSharing}

# Expected outcome

# Actual outcome`;
        document.location.href = `https://github.com/handlebars-lang/handlebars.js/issues/new?body=${encodeURIComponent(issueBody)}`;
      },
      reportSecurityIssue() {
        const body = `

--Insert description here--

Here is a URL to verify the issue:

${this.$props.urlForSharing}

`;
        document.location.href = `mailto:security@npmjs.com?body=${encodeURIComponent(body)}`;
      }
    }
  };
</script>
<style scoped lang="stylus">
.url-for-sharing {
    width: 100%;
}

.success-notification {
    color: green;
    border: 1px solid green;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
}
</style>
