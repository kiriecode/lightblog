<template>
  <div class="flex h-screen">
    <el-container class="flex-1">
      <el-aside class="w-50 h-full bg-gray-100">
        <el-menu default-active="1" :default-openeds="['2']" @select="handleMenuSelect">
          <el-menu-item index="dashboard">
            <el-icon>
              <Odometer />
            </el-icon>
            <span>控制台</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <Menu />
              </el-icon>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="ArticleList">
                <el-icon>
                  <List />
                </el-icon>
                <span>文章列表</span>
              </el-menu-item>
              <el-menu-item index="addArticle">
                <el-icon>
                  <Plus />
                </el-icon>
                <span>添加新文章</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="CategoryManager">
            <template #title>
              <el-icon>
                <Files />
              </el-icon>
              <span>分类管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="TagManager">
            <template #title>
              <el-icon>
                <CollectionTag />
              </el-icon>
              <span>标签管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="discusses">
            <template #title>
              <el-icon>
                <Comment />
              </el-icon>
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="users">
            <template #title>
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>用户管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container class="bg-cover bg-center" :style="{ backgroundImage: `url(${imgUrl})` }">
        <div class="bg-white bg-opacity-40 w-full h-full">
          <!-- 头部导航栏 -->
          <el-header class="flex justify-center items-center space-x-20 h-16">
            <span>个人博客后台管理系统</span>
            <ElLink type="primary" @click="logout">
              退出登录
            </ElLink>
          </el-header>
          <!-- 内容区域 -->
          <el-main class="h-[calc(100vh-4rem)] overflow-y-auto">
            <RouterView />
          </el-main>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '@/store/admin';
import type { Menu } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const random = ref('');
const imgUrl = ref('');

onMounted(() => {
  // setInterval(() => {
  //   random.value = Math.floor(Math.random() * 200).toString().padStart(3, '0');
  //   imgUrl.value = `/api/images/img-${random.value}.jpg`
  // }, 0.5 * 1000)
  random.value = Math.floor(Math.random() * 200).toString().padStart(3, '0');
  imgUrl.value = `https://lightblog.oss-cn-shenzhen.aliyuncs.com/images/img-${random.value}.jpg`
})

const adminStore = useAdminStore();
const router = useRouter();

function handleMenuSelect(route: string) {
  router.push('/admin/' + route);
}

function logout() {
  adminStore.logout();
  // 清除浏览器的本地存储（如 localStorage）
  localStorage.clear();
  router.push('/login');
}
</script>
