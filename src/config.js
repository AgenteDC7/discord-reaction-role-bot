module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  rules: {
    '632674590849630219': {
      channelId: '258314939998011393',
      isUnique: true,
      emojiRoleMap: {
        '🎉': ['542138999511187486']
      }
    }
  }
};
