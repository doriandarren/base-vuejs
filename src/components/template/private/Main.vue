<template>
  <div>
    <!-- Mobile Sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                </div>

                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <router-link v-if="!item.children" :to="{ name: item.href }" @click="closeSidebar"
                            :class="[currentRoute === item.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                            {{ item.name }}
                          </router-link>
                          <div v-else>
                            <button
                              :class="[isDropdownOpen(item.name) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold']"
                              @click="toggleDropdown(item.name)">
                              <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                              {{ item.name }}
                              <ChevronRightIcon
                                :class="[isDropdownOpen(item.name) ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"
                                aria-hidden="true" />
                            </button>
                            <transition>
                              <ul v-if="isDropdownOpen(item.name)" class="mt-1 px-2">
                                <li v-for="subItem in item.children" :key="subItem.name">
                                  <router-link :to="{ name: subItem.href }" @click="closeSidebar"
                                    :class="[currentRoute === subItem.href ? 'bg-gray-800 text-white' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-300']">
                                    {{ subItem.name }}
                                  </router-link>
                                </li>
                              </ul>
                            </transition>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="-mx-6 mt-auto">
                      <a href="#"
                        class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                        <img class="h-8 w-8 rounded-full bg-gray-50"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="" />
                        <span class="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <router-link v-if="!item.children" :to="{ name: item.href }" @click="closeSidebar"
                    :class="[currentRoute === item.href ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-300']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </router-link>
                  <div v-else>
                    <button
                      :class="[isDropdownOpen(item.name) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold']"
                      @click="toggleDropdown(item.name)">
                      <component :is="item.icon" class="h-6 w-6 shrink-0 text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                      <ChevronRightIcon
                        :class="[isDropdownOpen(item.name) ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"
                        aria-hidden="true" />
                    </button>
                    <transition>
                      <ul v-if="isDropdownOpen(item.name)" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                          <router-link :to="{ name: subItem.href }" @click="closeSidebar"
                            :class="[currentRoute === subItem.href ? 'bg-gray-800 text-white' : 'hover:bg-gray-50', 'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-300']">
                            {{ subItem.name }}
                          </router-link>
                        </li>
                      </ul>
                    </transition>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="relative flex flex-1" action="#" method="GET">
            <label for="search-field" class="sr-only">Search</label>
            <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400" aria-hidden="true" />
            <input id="search-field" class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>

              <transition>
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']" @click="item.onClick">
                      {{ item.name }}
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Your content -->
          <Breadcrumb />
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  HomeModernIcon,
  XMarkIcon,
  BuildingOffice2Icon,
  UsersIcon,
  DocumentIcon,
  FolderIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from '@heroicons/vue/20/solid';
import Breadcrumb from '@/components/template/private/Breadcrumb.vue';
//import { useAuthenticationStore } from '@/stores/auth/authentication';




// Importar traducciones
const { t } = useI18n()


//Logout
//const authStore = useAuthenticationStore();
//const { logout } = authStore;

const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: HomeModernIcon, current: true },
  { name: 'Products', href: 'products', icon: FolderIcon, current: false },
  { name: 'Calendar', href: 'calendar', icon: CalendarIcon, current: false },
  { name: 'Documents', href: 'documents', icon: DocumentIcon, current: false },
  { name: 'Reports', href: 'reports', icon: BuildingOffice2Icon, current: false },
  {
    name: 'Teams',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Engineering', href: 'engineering' },
      { name: 'Human Resources', href: 'human-resources' },
      { name: 'Customer Success', href: 'customer' },
    ],
  },
]

const userNavigation = [
  { name: t('logout'), href: '/login' },
  // { name: t('logout'), href: '#', onClick: () => sessionLogout() },
]

const sessionLogout = async () => {
  // await logout()
}

const sidebarOpen = ref(false)
const openDropdown = ref(null)

const router = useRouter()
const route = useRoute()
const currentRoute = ref(route.name)

watch(
  () => route.name,
  (newRoute) => {
    currentRoute.value = newRoute
    const parentItem = navigation.find((item) => item.children && item.children.some((subItem) => subItem.href === newRoute))
    if (parentItem) {
      openDropdown.value = parentItem.name
    } else {
      openDropdown.value = null
    }
  },
  { immediate: true }
)

const setSelected = (name) => {
  currentRoute.value = name
  router.push({ name })
  const parentItem = navigation.find(item => item.children && item.children.some(subItem => subItem.href === name));
  if (!parentItem) {
    openDropdown.value = null;
  }
}

const toggleDropdown = (name) => {
  if (openDropdown.value === name) {
    openDropdown.value = null
  } else {
    openDropdown.value = name
  }
}

const isDropdownOpen = (name) => {
  return openDropdown.value === name;
}

const closeAllDropdowns = () => {
  openDropdown.value = null;
}

const closeSidebar = () => {
  sidebarOpen.value = false;
  closeAllDropdowns();
}
</script>

<style scoped>
/* Añade estilos específicos aquí si lo deseas */
</style>
