export default {
  // legacy
  index: 'src/index.js',

  // Easy to use app
  App: 'src/smart-components/App/index.jsx',

  // SendbirdProvider
  SendbirdProvider: 'src/lib/Sendbird.jsx',
  sendBirdSelectors: 'src/lib/selectors.js',
  useSendbirdStateContext: 'src/hooks/useSendbirdStateContext.tsx',
  withSendBird: 'src/lib/SendbirdSdkContext.jsx',

  // ChannelList
  ChannelList: 'src/smart-components/ChannelList/index.tsx',
  'ChannelList/context': 'src/smart-components/ChannelList/context/ChannelListProvider.tsx',
  'ChannelList/components/AddChannel': 'src/smart-components/ChannelList/components/AddChannel/index.tsx',
  'ChannelList/components/ChannelListUI': 'src/smart-components/ChannelList/components/ChannelListUI/index.tsx',
  'ChannelList/components/ChannelListHeader': 'src/smart-components/ChannelList/components/ChannelListHeader/index.tsx',
  'ChannelList/components/ChannelPreview': 'src/smart-components/ChannelList/components/ChannelPreview/index.tsx',
  'ChannelList/components/ChannelPreviewAction': 'src/smart-components/ChannelList/components/ChannelPreviewAction.jsx',

  // ChannelSettings
  ChannelSettings: 'src/smart-components/ChannelSettings/index.tsx',
  'ChannelSettings/context': 'src/smart-components/ChannelSettings/context/ChannelSettingsProvider.tsx',
  'ChannelSettings/components/AdminPanel': 'src/smart-components/ChannelSettings/components/AdminPanel/index.tsx',
  'ChannelSettings/components/ChannelProfile': 'src/smart-components/ChannelSettings/components/ChannelProfile/index.tsx',
  'ChannelSettings/components/ChannelSettingsUI': 'src/smart-components/ChannelSettings/components/ChannelSettingsUI/index.tsx',
  'ChannelSettings/components/EditDetailsModal': 'src/smart-components/ChannelSettings/components/EditDetailsModal/index.tsx',
  'ChannelSettings/components/LeaveChannel': 'src/smart-components/ChannelSettings/components/LeaveChannel/index.tsx',
  'ChannelSettings/components/UserListItem': 'src/smart-components/ChannelSettings/components/UserListItem/index.tsx',
  'ChannelSettings/components/UserPanel': 'src/smart-components/ChannelSettings/components/UserPanel/index.tsx',

  // Channel
  Channel: 'src/smart-components/Channel/index.tsx',
  'Channel/context': 'src/smart-components/Channel/context/ChannelProvider.tsx',
  'Channel/components/ChannelHeader': 'src/smart-components/Channel/components/ChannelHeader/index.tsx',
  'Channel/components/ChannelUI': 'src/smart-components/Channel/components/ChannelUI/index.tsx',
  'Channel/components/FileViewer': 'src/smart-components/Channel/components/FileViewer/index.tsx',
  'Channel/components/FrozenNotification': 'src/smart-components/Channel/components/FrozenNotification/index.tsx',
  'Channel/components/Message': 'src/smart-components/Channel/components/Message/index.tsx',
  'Channel/components/MessageInput': 'src/smart-components/Channel/components/MessageInput/index.tsx',
  'Channel/components/MessageList': 'src/smart-components/Channel/components/MessageList/index.tsx',
  'Channel/components/RemoveMessageModal': 'src/smart-components/Channel/components/RemoveMessageModal.tsx',
  'Channel/components/TypingIndicator': 'src/smart-components/Channel/components/TypingIndicator.tsx',
  'Channel/components/UnreadCount': 'src/smart-components/Channel/components/UnreadCount/index.tsx',

  // OpenChannel
  OpenChannel: 'src/smart-components/OpenChannel/index.tsx',
  'OpenChannel/context': 'src/smart-components/OpenChannel/context/OpenChannelProvider.tsx',
  'OpenChannel/components/FrozenChannelNotification': 'src/smart-components/OpenChannel/components/FrozenChannelNotification/index.tsx',
  'OpenChannel/components/OpenChannelHeader': 'src/smart-components/OpenChannel/components/OpenChannelHeader/index.tsx',
  'OpenChannel/components/OpenChannelInput': 'src/smart-components/OpenChannel/components/OpenChannelInput/index.tsx',
  'OpenChannel/components/OpenChannelMessage': 'src/smart-components/OpenChannel/components/OpenChannelMessage/index.tsx',
  'OpenChannel/components/OpenChannelMessageList': 'src/smart-components/OpenChannel/components/OpenChannelMessageList/index.tsx',
  'OpenChannel/components/OpenChannelUI': 'src/smart-components/OpenChannel/components/OpenChannelUI/index.tsx',

  // OpenChannelSettings
  OpenChannelSettings: 'src/smart-components/OpenChannelSettings/index.tsx',
  'OpenChannelSettings/context': 'src/smart-components/OpenChannelSettings/context/OpenChannelSettingsProvider.tsx',
  'OpenChannelSettings/components/DeleteOpenChannel': 'src/smart-components/OpenChannelSettings/components/DeleteOpenChannel.tsx',
  'OpenChannelSettings/components/EditDetailsModal': 'src/smart-components/OpenChannelSettings/components/EditDetailsModal.tsx',
  'OpenChannelSettings/components/InvalidChannel': 'src/smart-components/OpenChannelSettings/components/InvalidChannel.tsx',
  'OpenChannelSettings/components/OpenChannelProfile': 'src/smart-components/OpenChannelSettings/components/OpenChannelProfile/index.tsx',
  'OpenChannelSettings/components/OpenChannelSettingsUI': 'src/smart-components/OpenChannelSettings/components/OpenChannelSettingsUI/index.tsx',
  'OpenChannelSettings/components/OperatorUI': 'src/smart-components/OpenChannelSettings/components/OperatorUI/index.tsx',
  'OpenChannelSettings/components/ParticipantUI': 'src/smart-components/OpenChannelSettings/components/ParticipantUI/index.tsx',

  // MessageSearch
  MessageSearch: 'src/smart-components/MessageSearch/index.tsx',
  'MessageSearch/context': 'src/smart-components/MessageSearch/context/MessageSearchProvider.tsx',
  'MessageSearch/components/MessageSearchUI': 'src/smart-components/MessageSearch/components/MessageSearchUI/index.tsx',

  // CreateChannel
  CreateChannel: 'src/smart-components/CreateChannel/index.tsx',
  'CreateChannel/context': 'src/smart-components/CreateChannel/context/CreateChannelProvider.tsx',
  'CreateChannel/components/CreateChannelUI': 'src/smart-components/CreateChannel/components/CreateChannelUI/index.tsx',
  'CreateChannel/components/InviteMembers': 'src/smart-components/CreateChannel/components/InviteMembers/index.tsx',
  'CreateChannel/components/SelectChannelType': 'src/smart-components/CreateChannel/components/SelectChannelType.tsx',

  // EditUserProfile
  EditUserProfile: 'src/smart-components/EditUserProfile/index.tsx',
  'EditUserProfile/context': 'src/smart-components/EditUserProfile/context/EditUserProfileProvider.tsx',
  'EditUserProfile/components/EditUserProfileUI': 'src/smart-components/EditUserProfile/components/EditUserProfileUI/index.tsx',

  // UI Components
  'ui/Accordion': 'src/ui/Accordion/index.tsx',
  'ui/AccordionGroup': 'src/ui/Accordion/AccordionGroup.tsx',
  'ui/AdminMessage': 'src/ui/AdminMessage/index.jsx',
  'ui/Avatar': 'src/ui/Avatar/index.tsx',
  'ui/MutedAvatarOverlay': 'src/ui/Avatar/MutedAvatarOverlay.tsx',
  'ui/Badge': 'src/ui/Badge/index.jsx',
  'ui/Button': 'src/ui/Button/index.jsx',
  'ui/ChannelAvatar': 'src/ui/ChannelAvatar/index.tsx',
  'ui/OpenChannelAvatar': 'src/ui/ChannelAvatar/OpenChannelAvatar.tsx',
  'ui/ChannelPreview': 'src/ui/ChannelPreview/index.jsx',
  'ui/ChatHeader': 'src/ui/ChatHeader/index.jsx',
  'ui/Checkbox': 'src/ui/Checkbox/index.jsx',
  'ui/ConnectionStatus': 'src/ui/ConnectionStatus/index.jsx',
  'ui/ContextMenu': 'src/ui/ContextMenu/index.jsx',
  'ui/DateSeparator': 'src/ui/DateSeparator/index.jsx',
  'ui/Dropdown': 'src/ui/Dropdown/index.jsx',
  'ui/EmojiReactions': 'src/ui/EmojiReactions/index.tsx',
  'ui/FileMessageItemBody': 'src/ui/FileMessageItemBody/index.tsx',
  'ui/FileViewer': 'src/ui/FileViewer/index.jsx',
  'ui/Icon': 'src/ui/Icon/index.jsx',
  'ui/IconButton': 'src/ui/IconButton/index.jsx',
  'ui/ImageRenderer': 'src/ui/ImageRenderer/index.jsx',
  'ui/Input': 'src/ui/Input/index.jsx',
  'ui/Label': 'src/ui/Label/index.jsx',
  'ui/LinkLabel': 'src/ui/LinkLabel/index.jsx',
  'ui/Loader': 'src/ui/Loader/index.jsx',
  'ui/MessageContent': 'src/ui/MessageContent/index.tsx',
  'ui/MessageInput': 'src/ui/MessageInput/index.jsx',
  'ui/MessageItemMenu': 'src/ui/MessageItemMenu/index.tsx',
  'ui/MessageItemReactionMenu': 'src/ui/MessageItemReactionMenu/index.tsx',
  'ui/MessageSearchFileItem': 'src/ui/MessageSearchFileItem/index.tsx',
  'ui/MessageSearchItem': 'src/ui/MessageSearchItem/index.tsx',
  'ui/MessageStatus': 'src/ui/MessageStatus/index.jsx',
  'ui/Modal': 'src/ui/Modal/index.jsx',
  'ui/OGMessageItemBody': 'src/ui/OGMessageItemBody/index.tsx',
  'ui/OpenChannelAdminMessage': 'src/ui/OpenChannelAdminMessage/index.tsx',
  'ui/OpenChannelMessageContent': 'src/ui/OpenChannelMessageContent/index.tsx',
  // should we rename it to OpenChannel?
  'ui/OpenchannelConversationHeader': 'src/ui/OpenchannelConversationHeader/index.tsx',
  'ui/OpenchannelFileMessage': 'src/ui/OpenchannelFileMessage/index.tsx',
  'ui/OpenchannelOGMessage': 'src/ui/OpenchannelOGMessage/index.tsx',
  'ui/OpenchannelThumbnailMessage': 'src/ui/OpenchannelThumbnailMessage/index.tsx',
  'ui/OpenchannelUserMessage': 'src/ui/OpenchannelUserMessage/index.tsx',
  'ui/PlaceHolder': 'src/ui/PlaceHolder/index.jsx',
  'ui/QuoteMessage': 'src/ui/QuoteMessage/index.tsx',
  'ui/QuoteMessageInput': 'src/ui/QuoteMessageInput/index.tsx',
  'ui/ReactionBadge': 'src/ui/ReactionBadge/index.jsx',
  'ui/ReactionButton': 'src/ui/ReactionButton/index.jsx',
  'ui/SortByRow': 'src/ui/SortByRow/index.jsx',
  'ui/TextButton': 'src/ui/TextButton/index.jsx',
  'ui/TextMessageItemBody': 'src/ui/TextMessageItemBody/index.tsx',
  'ui/ThumbnailMessageItemBody': 'src/ui/ThumbnailMessageItemBody/index.tsx',
  'ui/Tooltip': 'src/ui/Tooltip/index.jsx',
  'ui/TooltipWrapper': 'src/ui/TooltipWrapper/index.jsx',
  'ui/UnknownMessageItemBody': 'src/ui/UnknownMessageItemBody/index.tsx',
  'ui/UserListItem': 'src/ui/UserListItem/index.jsx',
  'ui/UserProfile': 'src/ui/UserProfile/index.tsx',
};