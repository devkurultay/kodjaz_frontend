const Locales = require('./public/locales/locales');

module.exports = {
	i18n: {
		locales: Locales.SUPPORTED_LOCALES,
		defaultLocale: Locales.DEFAULT_LOCALE,
	},
};
