import { mount } from '@vue/test-utils';
import '../../public/wealth/js/config-settings';
import '../../public/wealth/js/config-flow';
import '../../public/wealth/i18n/lang-en';
import { mainconfig } from '@/global';
import App from '@/DefaultPage.vue';

describe('Wealth Management App on Desktop', () => {
  it('renders home page on load', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: (msg) => msg,
        $n: (msg) => msg,
        $d: (msg) => msg,
      },
    });
    expect(wrapper.find('h1').text()).toContain('message.hero_text');
  });

  it('renders account page when authenticated', () => {
    mainconfig.isAuthenticated = true;
    mainconfig.userId = 0;
    const wrapper = mount(App, {
      mocks: {
        $t: (msg) => msg,
        $n: (msg) => msg,
        $d: (msg) => msg,
      },
    });
    expect(wrapper.find('h1').text()).toContain('message.accountoverview');
  });
});

describe('Wealth Management App on Mobile', () => {
  it('renders home page on load', () => {
    mainconfig.isMobilePhone = true;
    mainconfig.isAuthenticated = false;
    mainconfig.userId = -1;
    const wrapper = mount(App, {
      mocks: {
        $t: (msg) => msg,
        $n: (msg) => msg,
        $d: (msg) => msg,
      },
    });
    expect(wrapper.find('h1').text()).toContain(
      'message.phone_home_page_title',
    );
  });
});
