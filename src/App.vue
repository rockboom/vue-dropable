<template>
    <div class="app">
        <h1>这是渲染页面</h1>
        <visual-editor
            v-model="jsonData"
            :config="visualConfig"
            :formData="formData"
            :customProps="customProps"
        >
            <!-- <template #subBtn>
                <el-button v-if="formData.food === 'dangao'">自定义按钮</el-button>
                <el-tag v-else>自定义标签</el-tag>
            </template> -->
        </visual-editor>

        <div style="text-align: center">
            {{ JSON.stringify(formData) }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { VisualEditor } from '@/packages/visual-editor.tsx'
import { visualConfig } from './visual.config'
import jsonData from './data.json'

export default defineComponent({
    name: 'App',
    components: {
        VisualEditor,
    },
    data() {
        return {
            visualConfig,
            jsonData,
            formData: {
                username: 'admin',
            },
            customProps: {
                subBtn: {
                    onClick: () => {
                        this.$notify({ message: '执行' })
                    },
                },
                mySelect: {
                    onChange: (val) => {
                        this.$notify({ message: val })
                        this.formData.acctType = null;
                    },
                },
            },
        }
    },
})
</script>

<style lang="scss">
html,
body {
    margin: 0;
    border: 0;
}
.app {
    padding-bottom: 300px;
}
</style>
