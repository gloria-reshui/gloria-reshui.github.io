import { SchemeVariant } from '../src/utils/colorFun/src';

// General site info
const FULL_NAME = '热水';
const FIRST_NAME = 'Reshui';

// Github Pages configuration
const GITHUB_USERNAME = 'gloria-reshui';

// A hex color value. This is used to set the primary color of the site.
const PRIMARY_COLOR = '#4A90E2';
const ACCENT_COLORS = {
  orange: '#FFB74D',
  blue: '#64B5F6'
};
const THEME_VARIANT = SchemeVariant.COMPLEMENTARY;

// Social media links
const LINKEDIN_USERNAME = '';
const TWITTER_USERNAME = '';
const YOUTUBE_USERNAME = 'UC5Qqj6mNKguotxUngQb3TUA';
const FACEBOOK_USERNAME = '';
const INSTAGRAM_USERNAME = 'gloria_reshui';
const SNAPCHAT_USERNAME = '';
const MASTODON_USERNAME = '';
const DISCORD_USERNAME = 'reshui_';
const DISCORD_SERVER_INVITE = '';
const TWITCH_USERNAME = '';
const TELEGRAM_USERNAME = '';
const WHATSAPP_USERNAME = '';
const LINKTREE_USERNAME = '';
const REDBOOK_USERNAME = 'Reshui784';
const THREAD_USERNAME = 'gloria_reshui';
const PATREON_USERNAME = 'Reshui784';
const BILIBILI_USERNAME = '399826816';

// About me config
const HEADSHOT_PATH = '/imgs/headshot.jpg';
const HEADSHOT_ALT = 'photo';
const ABOUT_ME = 'An independent philosopher or somebody who don\'t like shit. Sometimes I make tools for girls to have fun.無駄に生きることを誇りに思っている';

// Site assets
const DEFAULT_SOCIAL_IMAGE_PATH = '/imgs/default-social.png';
const FAVICON_PATH = '/imgs/favicon.png';
const FAVICON_TYPE = 'image/png';

// Disable EasyABC section
const EASYABC_ENABLED = false;

export const easyAbcUserConfig = {
	firstName: FIRST_NAME,
	fullName: FULL_NAME,
	siteTitle: 'personal site.',
	siteDescription: '',
	headShotPath: HEADSHOT_PATH,
	headshotAlt: HEADSHOT_ALT,
	aboutMe: ABOUT_ME,
	defaultSocialImage: DEFAULT_SOCIAL_IMAGE_PATH,
	faviconPath: FAVICON_PATH,
	faviconType: FAVICON_TYPE,
	githubUsername: GITHUB_USERNAME,
	githubPagesUrl: `https://${GITHUB_USERNAME}.github.io`,
	socialMedia: {
		linkedinUsername: LINKEDIN_USERNAME,
		twitterUsername: TWITTER_USERNAME,
		githubUsername: GITHUB_USERNAME,
		youtubeUsername: YOUTUBE_USERNAME,
		facebookUsername: FACEBOOK_USERNAME,
		instagramUsername: INSTAGRAM_USERNAME,
		snapchatUsername: SNAPCHAT_USERNAME,
		mastodonUsername: MASTODON_USERNAME,
		discordUsername: DISCORD_USERNAME,
		twitchUsername: TWITCH_USERNAME,
		telegramUsername: TELEGRAM_USERNAME,
		whatsappUsername: WHATSAPP_USERNAME,
		linktreeUsername: LINKTREE_USERNAME,
		discordServerInvite: DISCORD_SERVER_INVITE,
		redbookUsername: REDBOOK_USERNAME,
		threadUsername: THREAD_USERNAME,
		patreonUsername: PATREON_USERNAME,
		bilibiliUsername: BILIBILI_USERNAME,
	},
	easyAbcEnabled: EASYABC_ENABLED,
	primaryColor: PRIMARY_COLOR,
	themeVariant: THEME_VARIANT,
};
