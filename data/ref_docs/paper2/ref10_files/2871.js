(self.webpackChunklite=self.webpackChunklite||[]).push([[2871],{956:(e,n,i)=>{"use strict";i.d(n,{K:()=>o,z:()=>k});var a=i(319),d=i.n(a),t=i(61598),m=i(19194),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Quote_quote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"quoteId"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"markups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"anchorType"}},{kind:"Field",name:{kind:"Name",value:"end"}},{kind:"Field",name:{kind:"Name",value:"href"}},{kind:"Field",name:{kind:"Name",value:"rel"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"userId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"TextParagraph_paragraph"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"buildQuotePreviewParagraph_quote"}}]}}].concat(d()(t.$.definitions),d()(m.Rg.definitions),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"buildQuotePreviewParagraph_quote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"markups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"end"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}}]}}]))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"InResponseToPostPreview_postResult"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostResult"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"responsesCount"}},{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}}]},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"InResponseToPostPreview_mediaResource"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"inResponseToMediaResource"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"mediumQuote"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Quote_quote"}}]}}]}}]}}].concat(d()(l.definitions))}},50122:(e,n,i)=>{"use strict";i.d(n,{p:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ParagraphRefsMapContext_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"text"}}]}}]}},15409:(e,n,i)=>{"use strict";i.d(n,{D:()=>m,Z:()=>l});var a=i(319),d=i.n(a),t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MarkupNode_data_dropCapImage"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"DropCap_image"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"DropCap_image"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"originalHeight"}},{kind:"Field",name:{kind:"Name",value:"originalWidth"}}]}}]))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Markups_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"paragraphs"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"startOffset"}},{kind:"Field",name:{kind:"Name",value:"endOffset"}},{kind:"Field",name:{kind:"Name",value:"userId"}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Markups_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"hasDropCap"}},{kind:"Field",name:{kind:"Name",value:"dropCapImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MarkupNode_data_dropCapImage"}}]}},{kind:"Field",name:{kind:"Name",value:"markups"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"start"}},{kind:"Field",name:{kind:"Name",value:"end"}},{kind:"Field",name:{kind:"Name",value:"href"}},{kind:"Field",name:{kind:"Name",value:"anchorType"}},{kind:"Field",name:{kind:"Name",value:"userId"}},{kind:"Field",name:{kind:"Name",value:"linkMetadata"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"httpStatus"}}]}}]}}]}}].concat(d()(t.definitions))}},47137:(e,n,i)=>{"use strict";i.d(n,{M:()=>u,u:()=>s});var a=i(319),d=i.n(a),t=i(16831),m=i(61598),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostViewNoteCard_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat(d()(t.W.definitions),d()(m.$.definitions))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostViewNoteCard_noteReply"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NoteReply"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"author"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostViewNoteCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"content"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"noteId"}},{kind:"Field",name:{kind:"Name",value:"postId"}}]}}].concat(d()(l.definitions))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostViewNoteCard_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"author"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostViewNoteCard_user"}}]}},{kind:"Field",name:{kind:"Name",value:"content"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"postId"}},{kind:"Field",name:{kind:"Name",value:"post"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"replies"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostViewNoteCard_noteReply"}}]}},{kind:"Field",name:{kind:"Name",value:"selectionStartOffset"}},{kind:"Field",name:{kind:"Name",value:"selectionEndOffset"}}]}}].concat(d()(l.definitions),d()(k.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostAnnotationsMarker_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostViewNoteCard_paragraph"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"PostViewNoteCard_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostAnnotationsMarker_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostViewNoteCard_privateNote"}}]}}].concat(d()(o.definitions))}},19194:(e,n,i)=>{"use strict";i.d(n,{Rg:()=>k,m8:()=>o,hz:()=>u});var a=i(319),d=i.n(a),t=i(15409),m=i(50122),l=i(47137),k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TextParagraph_paragraph"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Paragraph"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"hasDropCap"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Markups_paragraph"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ParagraphRefsMapContext_paragraph"}}]}}].concat(d()(t.Z.definitions),d()(m.p.definitions))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TextParagraph_highlight"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Quote"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Markups_highlight"}}]}}].concat(d()(t.D.definitions))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TextParagraph_privateNote"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Note"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostAnnotationsMarker_privateNote"}}]}}].concat(d()(l.u.definitions))}},72350:(e,n,i)=>{"use strict";i.d(n,{G:()=>a});var a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useShouldShowEntityDrivenSubscription_creator"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},91547:(e,n,i)=>{"use strict";i.d(n,{Hr:()=>r,gs:()=>p,qt:()=>c,Zz:()=>v,Uh:()=>N,Zd:()=>S});var a=i(319),d=i.n(a),t=[{kind:"FragmentDefinition",name:{kind:"Name",value:"OAuthClickable_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accountToken"}}]}}],m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AppleSusiButton_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"OAuthClickable_query"}}]}}].concat(d()(t))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"FacebookSusiButton_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"OAuthClickable_query"}}]}}].concat(d()(t))},k={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"GoogleSusiButton_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"OAuthClickable_query"}}]}}].concat(d()(t))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"TwitterSusiButton_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"OAuthClickable_query"}}]}}].concat(d()(t))},u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SignInOptions_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AppleSusiButton_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"FacebookSusiButton_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"GoogleSusiButton_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"TwitterSusiButton_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EmailSusiButton_query"}}]}}].concat(d()(m.definitions),d()(l.definitions),d()(k.definitions),d()(o.definitions),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"EmailSusiButton_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"accountToken"}}]}}]))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SignUpOptions_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"FacebookSusiButton_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"GoogleSusiButton_query"}}]}}].concat(d()(l.definitions),d()(k.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignInOptions_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignUpOptions_collection"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignInOptions_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignUpOptions_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},N={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SignInOptions_topic"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignUpOptions_topic"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignInOptions_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignUpOptions_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))},S={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SignInOptions_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignUpOptions_user"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignInOptions_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignUpOptions_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))},p={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SignInOptions_newsletterV3"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignUpOptions_newsletterV3"}}]}}].concat(d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignInOptions_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]),d()([{kind:"FragmentDefinition",name:{kind:"Name",value:"SignUpOptions_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]))},v={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiContainer_query"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Query"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SignInOptions_query"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SignUpOptions_query"}}]}}].concat(d()(u.definitions),d()(s.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2871.94b28904.chunk.js.map