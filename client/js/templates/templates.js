this["JST"] = this["JST"] || {};

this["JST"]["templates/about_us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="about-block col-xs-pull-0 col-xs-push-0">\n\t<h1><a title="' +
__e( SITE_NAME ) +
'" href="javascript:void(0);"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
' ]" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a> </h1>\n\t<small class="show text-center">v 0.1.3 (2015-09-30)</small>\n\t<h3>Technologies and Components</h3>\n\t\t<ul class="list-unstyled">\n\t\t\t<li>Restya platform <a class="text-primary" target="_blank" title="http://restya.com/" href="http://restya.com/">http://restya.com/ </a></li>\n\t\t\t<li>Backbone.js <a class="text-primary" target="_blank" title="http://backbonejs.org/" href="http://backbonejs.org/ ">http://backbonejs.org/ </a></li>\n\t\t\t<li>Underscore <a class="text-primary" target="_blank" title="http://underscorejs.org" href="http://underscorejs.org">http://underscorejs.org </a></li>\n\t\t\t<li>jQuery <a class="text-primary" target="_blank" title="http://jquery.com/" href="http://jquery.com/">http://jquery.com/ </a></li>\n\t\t\t<li>jQuery UI <a class="text-primary" target="_blank" title="http://jqueryui.com" href="http://jqueryui.com">http://jqueryui.com </a></li>\n\t\t\t<li>Bootstrap3 <a class="text-primary" target="_blank" title="http://getbootstrap.com/" href="http://getbootstrap.com/">http://getbootstrap.com/ </a></li>\n\t\t\t<li>Font Awesome <a class="text-primary" target="_blank" title="http://fortawesome.github.io/Font-Awesome/" href="http://fortawesome.github.io/Font-Awesome/">http://fortawesome.github.io/Font-Awesome/ </a></li>\n\t\t\t<li>Dockmodal <a class="text-primary" target="_blank" title="http://uxmine.com/demo/dockmodal/" href="http://uxmine.com/demo/dockmodal/">http://uxmine.com/demo/dockmodal/ </a></li>\n\t\t\t<li>FullCalendar <a class="text-primary" target="_blank" title="http://fullcalendar.io/" href="http://fullcalendar.io/">http://fullcalendar.io/ </a></li>\n\t\t\t<li>Markdown Converter <a class="text-primary" target="_blank" title="https://github.com/showdownjs/showdown" href="http://fullcalendar.io/">https://github.com/showdownjs/showdown </a></li>\n\t\t\t<li>Select2 <a class="text-primary" target="_blank" title="https://select2.github.io/" href="https://select2.github.io/">https://select2.github.io/ </a></li>\n\t\t\t<li>Fileupload <a class="text-primary" target="_blank" title="https://blueimp.github.io/jQuery-File-Upload/" href="https://blueimp.github.io/jQuery-File-Upload/">https://blueimp.github.io/jQuery-File-Upload/ </a></li>\n\t\t\t<li>Doughnut Chart <a class="text-primary" target="_blank" title="https://github.com/githiro/drawDoughnutChart" href="https://github.com/githiro/drawDoughnutChart">https://github.com/githiro/drawDoughnutChart </a></li>\n\t\t\t<li>Dualstorage <a class="text-primary" target="_blank" title="https://github.com/nilbus/Backbone.dualStorage" href="https://github.com/nilbus/Backbone.dualStorage">https://github.com/nilbus/Backbone.dualStorage </a></li>\n\t\t\t<li>Timeago <a class="text-primary" target="_blank" title="http://timeago.yarp.com/" href="http://timeago.yarp.com/">http://timeago.yarp.com/ </a></li>\n\t\t\t<li>Flickr <a class="text-primary" target="_blank" title="https://www.flickr.com/services/api/" href="https://www.flickr.com/services/api/">https://www.flickr.com/services/api/ </a></li>\n\t\t\t<li>Musical <a class="text-primary" target="_blank" title="https://github.com/PencilCode/musical.js" href="https://github.com/PencilCode/musical.js">https://github.com/PencilCode/musical.js </a></li>\n\t\t\t<li>Dropbox <a class="text-primary" target="_blank" title="https://www.dropbox.com/developers/dropins/chooser/js" href="https://www.dropbox.com/developers/dropins/chooser/js">https://www.dropbox.com/developers/dropins/chooser/js </a></li>\n\t\t\t<li>PostgreSQL <a class="text-primary" target="_blank" title="http://www.postgresql.org" href="http://www.postgresql.org">http://www.postgresql.org </a></li>\n\t\t\t<li>Finediff <a class="text-primary" target="_blank" title="http://www.raymondhill.net/finediff/" href="http://www.raymondhill.net/finediff/">http://www.raymondhill.net/finediff/ </a></li>\n\t\t\t<li>OAuth <a class="text-primary" target="_blank" title="http://bshaffer.github.io/oauth2-server-php-docs/" href="http://bshaffer.github.io/oauth2-server-php-docs/">http://bshaffer.github.io/oauth2-server-php-docs/ </a></li>\n\t\t\t<li>ElasticSearch <a class="text-primary" target="_blank" title="https://www.elastic.co/" href="https://www.elastic.co/">https://www.elastic.co/ </a></li>\n\t\t\t<li>Grunt <a class="text-primary" target="_blank" title="http://gruntjs.com/" href="http://gruntjs.com/">http://gruntjs.com/ </a></li>\n\t\t\t<li>Swagger UI <a class="text-primary" target="_blank" title="http://swagger.io/swagger-ui/" href="http://swagger.io/swagger-ui/">http://swagger.io/swagger-ui/ </a></li>\n\t\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/activity"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(!_.isEmpty(activity) && activity != null){ ;
__p += ' \n<div class="media">\n\t<a data-placement="bottom" title="' +
__e(activity.attributes.full_name ) +
'" data-toggle="tooltip" class="js-tooltip pull-left" href="#/user/' +
__e( activity.attributes.user_id ) +
'">\n\t\t';
 if(!_.isEmpty(activity.attributes.profile_picture_path)) {
			var profile_picture_path = activity.showImage('User', activity.attributes.user_id, 'small_thumb' );
		;
__p += '\n\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(activity.attributes.full_name ) +
']" title="' +
__e(activity.attributes.full_name ) +
'" class="img-rounded img-responsive">\n\t\t';
 } else {;
__p += ' \n\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
__e( activity.attributes.initials ) +
'</i>\n\t\t';
 } ;
__p += '\n\t</a>\n\t<div class="media-body">\n    \t';
 if(activity.attributes.type == 'add_comment' && activity.attributes.type == 'edit_comment' ) { ;
__p += '\n\t\t<div class="media-heading">\t\t\t\n\t\t\t\n            <span class="js-activity-' +
__e( activity.attributes.id ) +
'">' +
((__t = ( converter.makeHtml(makeLink(''+ _.escape(activity.attributes.comment), activity.attributes.board_id)) )) == null ? '' : __t) +
'</span>\n\t\t</div>   \n        ';
 } else {;
__p += '\n\t\t';
 
			var cardLink = '<a href="#/board/' + activity.attributes.board_id + '/card/' + activity.attributes.card_id + '">' + _.escape(activity.attributes.card_name) + '</a>';
			var organizationLink = '<a href="#/organization/' + activity.attributes.organization_id + '">' + _.escape(activity.attributes.organization_name) + '</a>';
			if(activity.attributes.type != 'add_comment' && activity.attributes.type != 'edit_comment') {
				activity.attributes.comment = activity.attributes.comment.replace('##ORGANIZATION_LINK##', organizationLink);
				activity.attributes.comment = activity.attributes.comment.replace('##CARD_LINK##', cardLink);
				activity.attributes.comment = activity.attributes.comment.replace('##LABEL_NAME##', _.escape(activity.attributes.label_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CARD_NAME##', _.escape(activity.attributes.card_name));
				activity.attributes.comment = activity.attributes.comment.replace('##DESCRIPTION##', _.escape(activity.attributes.card_description));
				activity.attributes.comment = activity.attributes.comment.replace('##LIST_NAME##', _.escape(activity.attributes.list_name));
				activity.attributes.comment = activity.attributes.comment.replace('##BOARD_NAME##', _.escape(activity.attributes.board_name));
				activity.attributes.comment = activity.attributes.comment.replace('##USER_NAME##', _.escape(activity.attributes.full_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_NAME##', _.escape(activity.attributes.checklist_item_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_PARENT_NAME##', _.escape(activity.attributes.checklist_item_parent_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_NAME##', _.escape(activity.attributes.checklist_name));
			} else {
				if(!_.isUndefined(activity.from_footer)) { 
					var comment = activity.attributes.full_name + ' commented in card ' + cardLink;
				}
			}
		;
__p += '             \n\t\t<div class="col-xs-12 btn-block">\n\t\t\t<div class="';
 if(_.isUndefined(activity.from_footer)) { ;
__p += 'panel';
};
__p += '">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<span class="js-activity-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t\t';
 if((activity.attributes.type == 'add_comment' || activity.attributes.type == 'edit_comment')) { ;
__p += '\n\t\t\t\t\t\t';
if(!_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t<span>' +
((__t = ( comment )) == null ? '' : __t) +
'</span>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t';
if(!_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t<div class="panel"><div class="panel-body">\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(_.escape(activity.attributes.comment), activity.attributes.board_id)) )) == null ? '' : __t) +
'\n\t\t\t\t\t\t';
if(!_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t</div></div>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(activity.attributes.comment, activity.attributes.board_id)) )) == null ? '' : __t) +
'\n\t\t\t\t\t';
 };
__p += '\n\t\t\t\t\t</span>\n\t\t\t\t\t';
 if(activity.attributes.difference != null && activity.attributes.type != 'change_background' && activity.attributes.type != 'add_background' && activity.attributes.type != 'change_visibility' && activity.attributes.type != 'edit_card_duedate'&& activity.attributes.type != 'add_card_desc' && activity.attributes.type != 'update_card_checklist_item' && activity.attributes.type != 'change_card_position') { ;
__p += '\n\t\t\t\t\t\t<div class="thumbnail media-body">' +
((__t = ( converter.makeHtml(activity.attributes.difference[0]) )) == null ? '' : __t) +
'</div>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</div>\n        ';
 } ;
__p += '\n\t</div>\n</div>\n<div class="clearfix col-xs-12">\n\t<div class="clearfix col-xs-12">\n\t\t<small class="col-xs-12 pull-left">\n\t\t\t<abbr class="timeago pull-left text-muted" title="' +
__e( activity.attributes.created ) +
'">' +
__e( activity.attributes.created ) +
'</abbr>\n\t\t\t';
 if(activity.attributes.type == 'add_organization_attachment' || activity.attributes.type == 'change_visibility' || activity.attributes.type == 'add_organization_user' || activity.attributes.type == 'delete_organization_user') { ;
__p += '\n\t\t\t\t<a class="pull-left" href="#/organization/' +
((__t = ( activity.attributes.organization_id )) == null ? '' : __t) +
'">&nbsp;on&nbsp;' +
__e( activity.attributes.organization_name ) +
'</a>\n\t\t\t';
 } else if(type == 'all' && activity.attributes.type != 'edit_organization' && activity.attributes.type != 'add_organization') { ;
__p += '\n\t\t\t\t<a class="pull-left" href="#/board/' +
((__t = ( activity.attributes.board_id )) == null ? '' : __t) +
'">&nbsp;on&nbsp;' +
__e( activity.attributes.board_name ) +
'</a>\n\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 if(!_.isUndefined(authuser.user) && activity.attributes.type == "add_comment" && type != "all" && (_.isUndefined(activity.from_footer))) { ;
__p += '\n\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t\t\t<ul class="list-inline col-xs-offset-0">\n\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_comment"}))){ ;
__p += '\n\t\t\t\t\t\t\t<li><a title="Edit" class="js-show-edit-activity js-edit-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"  data-activity-temp-id="' +
__e( activity.attributes.temp_id ) +
'"><i class="icon-edit"></i>Edit</a></li>\n\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t<li><a title="Reply" class="js-show-reply-activity-form js-reply-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-repeat"></i>Reply</a></li>\n\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "delete_comment"}))){ ;
__p += '\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t\t\t\t<a title="Delete" class="dropdown-toggle js-show-confirm-comment-delete" data-toggle="dropdown" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-remove"></i>Delete</a>\n\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t\t\t\t\t<li id="js-acticity-actions-response-' +
__e( activity.attributes.id ) +
'" class="js-dropdown-popup dropdown-popup"></li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } else if(activity.attributes.revisions != null && activity.attributes.revisions != "" && (!_.isUndefined(authuser.user) && parseInt(authuser.user.id) == 1 || current_user_can_undo_it == true )){ ;
__p += '\n\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "undo_activity"}))){ ;
__p += '\n\t\t\t\t\t\t';
 if(!_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'"><ul class="list-inline col-xs-offset-0"><li><a title="Undo" class="js-undo2 pull-left" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-undo"></i>Undo</a></li></ul></div>\t\t\t\t\t\t\t\n\t\t\t\t\t\t';
 } else { ;
__p += '\t\n\t\t\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'"><ul class="list-inline col-xs-offset-0"><li><a title="Undo" class="js-undo pull-left" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-undo"></i>Undo</a></li></ul></div>\n\t\t\t\t\t\t';
 };
__p += '\t\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t<span class="pull-left col-xs-12 js-activity-reply-form-response-' +
__e( activity.attributes.id ) +
'"></span>\n\t\t</small>\n\t</div>\n</div>\n<hr class="clearfix col-xs-12 btn-block"/>\n';
 }else{ ;
__p += '<div class="media-body">No activities available.</div>';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/activity_add_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group required"><textarea id="inputAddComment" name="comment" class="form-control" placeholder="Write a comment" required></textarea></div><div class="submit"><input type="hidden" name="list_id" id="ListID" value="' +
__e( card.attributes.list_id ) +
'"> <input type="hidden" name="card_id" id="CardID" value="' +
__e( card.attributes.id ) +
'"> <input type="submit" id="submitCommentAdd" class="btn btn-primary" value="Comment"></div>';

}
return __p
};

this["JST"]["templates/activity_card_search"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(card != null){ ;
__p += '\n<a title="' +
__e( card.attributes.name ) +
'" href="#" class="js-add-comment-card" data-board-id="' +
__e( card.attributes.board_id ) +
'" data-card-id="' +
__e( card.id ) +
'" data-card-name="' +
__e( card.attributes.name ) +
'"><span>' +
__e( card.attributes.name ) +
'</span></a>\n';
}else{;
__p += '\nNo cards available.\n';
};
__p += '\n';

}
return __p
};

this["JST"]["templates/activity_delete_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Comment?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></div><div class="divider col-xs-12"></div><div class="col-xs-12"><p>Deleting a comment is forever. There is no undo.</p><a class="js-delete-comment btn btn-primary" title="Delete" data-activity-id="' +
__e( activity_id ) +
'">Delete</a></div>';

}
return __p
};

this["JST"]["templates/activity_index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="well-sm"></div>\n<ul class="clearfix list-unstyled" id="js-admin-activity-list">\n\n</ul>\n<div class="btn btn-primary hide" id="js-admin-activites-load-more">Load more activities</div>';

}
return __p
};

this["JST"]["templates/activity_reply_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="required form-group"><textarea rows="4" id="inputAddComment" name="comment" class="form-control" placeholder="Write a comment" required></textarea></div><div class="submit"><input type="hidden" name="list_id" id="ListID" value="' +
__e( activity.attributes.list_id) +
'"> <input type="hidden" name="card_id" id="CardID" value="' +
__e( activity.attributes.card_id) +
'"> <input type="hidden" name="root" id="RootID" value="' +
__e( activity.attributes.id) +
'"> <input type="submit" id="submitCommentAdd" class="btn btn-primary" value="Reply"> <i class="icon-remove js-hide-reply-comment-form btn btn-link cur" title="Cancel" data-activity-id="' +
__e( activity.attributes.id) +
'"></i></div>';

}
return __p
};

this["JST"]["templates/activity_user_add_search_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(user != null) { ;
__p += '<li><a title="' +
__e(user.attributes.username ) +
'" href="#" class="js-add-comment-member" data-user-id="' +
__e(user.id ) +
'" data-user-name="' +
__e(user.attributes.username ) +
'" data-user-initial="' +
__e(user.attributes.initials ) +
'" data-user-profile-picture-path="' +
__e(user.attributes.profile_picture_path) +
'"><span>\n';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
	var profile_picture_path = user.showImage('User', user.attributes.user_id, 'micro_thumb' );
;
__p += '\n<img src="' +
__e(profile_picture_path ) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded img-responsive avatar avatar-sm">';
 } else {;
__p += ' <i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( user.attributes.initials ) +
'</i>';
 } ;
__p += '</span> <span>' +
__e(user.attributes.username ) +
'</span></a></li>';
 }else{ ;
__p += '<li> No users available.</li>';
};
__p += '\n\n';

}
return __p
};

this["JST"]["templates/admin_activity_index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(!_.isEmpty(activity) && activity != null){ ;
__p += ' \n';
 
	var cardLink = '<a href="#/board/' + activity.attributes.board_id + '/card/' + activity.attributes.card_id + '">' + _.escape(activity.attributes.card_name) + '</a>';
	var organizationLink = '<a href="#/organization/' + activity.attributes.organization_id + '">' + _.escape(activity.attributes.organization_name) + '</a>';
	if(activity.attributes.type != 'add_comment' && activity.attributes.type != 'edit_comment') {
		activity.attributes.comment = activity.attributes.comment.replace('##ORGANIZATION_LINK##', organizationLink);
		activity.attributes.comment = activity.attributes.comment.replace('##CARD_LINK##', cardLink);
		activity.attributes.comment = activity.attributes.comment.replace('##LABEL_NAME##', _.escape(activity.attributes.label_name));
		activity.attributes.comment = activity.attributes.comment.replace('##CARD_NAME##', _.escape(activity.attributes.card_name));
		activity.attributes.comment = activity.attributes.comment.replace('##DESCRIPTION##', _.escape(activity.attributes.card_description));
		activity.attributes.comment = activity.attributes.comment.replace('##LIST_NAME##', _.escape(activity.attributes.list_name));
		activity.attributes.comment = activity.attributes.comment.replace('##BOARD_NAME##', _.escape(activity.attributes.board_name));
		activity.attributes.comment = activity.attributes.comment.replace('##USER_NAME##', _.escape(activity.attributes.full_name));
		activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_NAME##', _.escape(activity.attributes.checklist_item_name));
		activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_PARENT_NAME##', _.escape(activity.attributes.checklist_item_parent_name));
		activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_NAME##', _.escape(activity.attributes.checklist_name));
	} else {
			var comment = activity.attributes.full_name + ' commented in card ' + cardLink;
	}
;
__p += '\n<div class="media">\n\t<a data-placement="bottom" title="' +
__e(activity.attributes.full_name ) +
'" data-toggle="tooltip" class="js-tooltip pull-left" href="#/user/' +
__e( activity.attributes.user_id ) +
'">\n\t\t';
 if(!_.isEmpty(activity.attributes.profile_picture_path)) {
			var profile_picture_path = activity.showImage('User', activity.attributes.user_id, 'small_thumb' );
		;
__p += '\n\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(activity.attributes.full_name ) +
']" title="' +
__e(activity.attributes.full_name ) +
'" class="img-rounded img-responsive">\n\t\t';
 } else {;
__p += ' \n\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
__e( activity.attributes.initials ) +
'</i>\n\t\t';
 } ;
__p += '\n\t</a>\n\t<div class="media-body">\n    \t';
 if(activity.attributes.type != 'add_comment' && activity.attributes.type != 'add_card_duedate') { ;
__p += '\n\t\t<div class="media-heading">\t\t\t\n            <span class="js-activity-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t';
 if(activity.attributes.type == 'add_comment' || activity.attributes.type == 'edit_comment') { ;
__p += '\t\n\t\t\t\t\t<span>' +
((__t = ( comment )) == null ? '' : __t) +
'</span>\n\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(_.escape(activity.attributes.comment), activity.attributes.board_id)) )) == null ? '' : __t) +
'\n\t\t\t\t';
 } else{;
__p += '\n\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(activity.attributes.comment, activity.attributes.board_id)) )) == null ? '' : __t) +
' \n\t\t\t\t';
 } ;
__p += '\n\t\t\t</span>\n            ';
 if(activity.attributes.difference != null) { ;
__p += '\n                <div class="thumbnail">' +
((__t = ( activity.attributes.difference )) == null ? '' : __t) +
'</div>\n            ';
 } ;
__p += '\n\t\t</div>   \n        ';
 } else {;
__p += '             \n\t\t<div class="col-xs-12 row">\n\t\t\t<div class="';
 if(_.isUndefined(activity.from_footer)) { ;
__p += 'panel';
};
__p += '">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<span class="js-activity-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t\t\t';
 if(activity.attributes.type == 'add_comment' || activity.attributes.type == 'edit_comment') { ;
__p += '\t\n\t\t\t\t\t\t\t<span>' +
((__t = ( comment )) == null ? '' : __t) +
'</span>\n\t\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(_.escape(activity.attributes.comment), activity.attributes.board_id)) )) == null ? '' : __t) +
'\n\t\t\t\t\t\t';
 } else{;
__p += '\n\t\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(activity.attributes.comment, activity.attributes.board_id)) )) == null ? '' : __t) +
' \n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t</span>\n\t\t\t\t\t';
 if(activity.attributes.difference != null && activity.attributes.type != 'change_background' && activity.attributes.type != 'add_background' && activity.attributes.type != 'change_visibility' && activity.attributes.type != 'edit_card_duedate'&& activity.attributes.type != 'add_card_desc' && activity.attributes.type != 'update_card_checklist_item' && activity.attributes.type != 'change_card_position') { ;
__p += '\n\t\t\t\t\t\t<div class="thumbnail">' +
((__t = ( activity.attributes.difference )) == null ? '' : __t) +
'</div>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\t\t\n\t\t</div>\n        ';
 } ;
__p += '\n\t</div>\n</div>\n<div class="clearfix col-xs-12">\n\t<div class="clearfix col-xs-12">\n\t\t<small class="col-xs-12 pull-left">\n\t\t\t<abbr class="timeago pull-left text-muted" title="' +
__e( activity.attributes.created ) +
'">' +
__e( activity.attributes.created ) +
'</abbr>\n\t\t\t';
 if(activity.attributes.type == 'add_organization_attachment' || activity.attributes.type == 'change_visibility' || activity.attributes.type == 'add_organization_user' || activity.attributes.type == 'delete_organization_user') { ;
__p += '\n\t\t\t\t<a class="pull-left" href="#/organization/' +
((__t = ( activity.attributes.organization_id )) == null ? '' : __t) +
'">&nbsp;on&nbsp;' +
__e( activity.attributes.organization_name ) +
'</a>\n\t\t\t';
 } else if(type == 'all' && activity.attributes.type != 'update_profile' && activity.attributes.type != 'edit_organization' && activity.attributes.type != 'add_organization') { ;
__p += '\n\t\t\t\t<a class="pull-left" href="#/board/' +
((__t = ( activity.attributes.board_id )) == null ? '' : __t) +
'">&nbsp;on&nbsp;' +
__e( activity.attributes.board_name ) +
'</a>\n\t\t\t';
 } ;
__p += '\n\t\t\t\t\t';
 if(!_.isUndefined(authuser.user) && activity.attributes.type == "add_comment" && type != "all") { ;
__p += '\n\t\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t\t\t\t<ul class="list-inline col-xs-offset-0">\n\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_comment"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t<li><a title="Edit" class="js-show-edit-activity js-edit-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-edit"></i>Edit</a></li>\n\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t<li><a title="Reply" class="js-show-reply-activity-form js-reply-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-repeat"></i>Reply</a></li>\n\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "delete_comment"}))){ ;
__p += '\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t\t\t\t\t<a title="Delete" class="dropdown-toggle js-show-confirm-comment-delete" data-toggle="dropdown" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-remove"></i>Delete</a>\n\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t\t\t\t\t\t<li id="js-acticity-actions-response-' +
__e( activity.attributes.id ) +
'" class="js-dropdown-popup dropdown-popup"></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
 } else if(activity.attributes.revisions != null && activity.attributes.revisions != "" && (parseInt(authuser.user.id) == 1 || current_user_can_undo_it == true )){ ;
__p += '\n\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "undo_activity"}))){ ;
__p += '\n\t\t\t\t\t\t\t';
 if(_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t\t<div class="pull-left js-acticity-action-' +
__e( activity.attributes.id ) +
'"><ul class="list-inline col-xs-offset-0"><li><a title="Undo" class="js-undo2 pull-left" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-undo"></i>Undo</a></li></ul></div>\n\t\t\t\t\t\t\t';
 };
__p += '\t\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t<span class="pull-left col-xs-12 js-activity-reply-form-response-' +
__e( activity.attributes.id ) +
'"></span>\n\t\t</small>\n\t</div>\n</div>\n<hr class="clearfix col-xs-12 btn-block"/>\n';
 }else{ ;
__p += '<div class="media-body">No activities available.</div>';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/admin_user_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">\n<div class="panel panel-default">\n  <div class="panel-heading lead">Add User</div>\n  <div class="panel-body well-lg">\n\t<form id="AdminUserAddForm" name="AdminUserAddForm" class="form-horizontal col-xs-12">\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputEmail">Email</label>\n\t\t<input type="email" required name="email" id="inputEmail" class="form-control" placeholder="Email">\n\t  </div>\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputUsername">Username</label>\n\t\t<input type="name" name="username" id="inputUsername" class="form-control" placeholder="Username" required pattern=".{6,15}" title="minimum 6 characters">\n\t  </div>\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputPassword">Password</label>\n\t\t<input type="password" required name="password" id="inputPassword"class="form-control" placeholder="Password" pattern="[A-Za-z0-9\\S]{6,15}" title="minimum 6 characters and white space not allowed">\n\t  </div>\n\t  <div class="form-group">\n\t\t<label class="sr-only ontrol-label" for="submitAddUser">Join Now</label>\n\t\t<input type="submit" class="btn btn-primary col-xs-12" id="submitAddUser" value="Add">\n\t  </div>\n\t</form>\n  </div>\n</div>\n</div>';

}
return __p
};

this["JST"]["templates/archived_card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(card != null){ ;
__p += '\n<a href="#/card/' +
__e( card.attributes.id) +
'" class="highlight-icon pull-left">' +
__e(card.attributes.name) +
'</a><div class="pull-right"><a title="Send to board" class="js-send-card-to-board ';
 if (!_.isEmpty(role_links.where({slug: 'add_organization'}))) {;
__p += 'send_back_to_archived_card ';
};
__p += '" data-card_id="' +
__e(card.attributes.id) +
'"><i class="icon-reply"></i></a> <a class="js-delete-archived-card" data-card_id="' +
__e(card.attributes.id) +
'" title="Delete"><i class="icon-remove btn btn-link"></i></a></div>\n';
 }else{ ;
__p += '\n\tNo cards available.\n';
};
__p += '\n';

}
return __p
};

this["JST"]["templates/archived_cards"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal"><div class="form-group"><input class="js-search-archived-cards form-control" id="inputSearchArchivedCards" name="name"></div></form><div class="row navbar-btn"><a href="#" class="js-show-archived-lists">Switch to lists</a></div><div class="row"><ul class="sidebar-boards-list list-unstyled  js-archived-cards-container"></ul></div>';

}
return __p
};

this["JST"]["templates/archived_items"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="list-unstyled"><li><div class="clearfix text-center col-xs-12"><a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link"><i class="icon-caret-left"></i></a> <span class="col-xs-10 navbar-btn"><strong>Archived Items</strong></span></div><div class="col-xs-12 divider"></div><div class="col-xs-12 member-modal js-pre-scrollable vertical-scrollbar js-archived-items-container"></div></li></ul>';

}
return __p
};

this["JST"]["templates/archived_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(list != null){ ;
__p += '\n<span class="highlight-icon pull-left">' +
__e( list.attributes.name ) +
'</span><div class="pull-right"><a title="Send to board" class="js-send-list-to-board" data-list_id="' +
__e( list.attributes.id ) +
'"><i class="icon-reply"></i></a><a title="Delete" class="js-delete-archived-list" data-list_id="' +
__e( list.attributes.id ) +
'"><i class="icon-remove btn btn-link"></i></a></div>\n';
 }else{ ;
__p += '\n\tNo lists available.\n';
};


}
return __p
};

this["JST"]["templates/archived_lists"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="form-horizontal"><div class="form-group"><input class="js-search-archived-lists form-control" id="inputSearchArchivedLists" name="name"></div></form><div class="row navbar-btn"><a href="#" class="js-show-archived-card-lists">Switch to Cards</a></div><div class="row"><ul class="sidebar-boards-list list-unstyled js-archived-cards-container"></ul></div>';

}
return __p
};

this["JST"]["templates/attachment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(attachment != null){ ;
__p += ' \n\t<a target="_blank" href="' +
((__t = ( attachment.downloadLink('download', attachment.get('id')) )) == null ? '' : __t) +
'" class="pull-left navbar-btn img-thumbnail thumb-img">\n\t\t';
 if(attachment.get("name").match(/\.(jpg|jpeg|png|gif)$/)){ 
			var picture_path = attachment.showImage('CardAttachment', attachment.attributes.id, 'large_thumb' );
		;
__p += '\n\t\t\t<img src="' +
((__t = ( picture_path)) == null ? '' : __t) +
'" class="img-responsive center-block">\n\t\t';
 } else{ 
			 var extension = attachment.attributes.name.split('.');
		;
__p += '\n\t\t\t<p class="thumb-img"><span class="h1 navbar-btn">';
 if(!_.isUndefined(extension) && extension.length > 1) { ;
__p +=
__e( extension[extension.length - 1].toUpperCase() );
 };
__p += '</span></p>\n\t\t';
 };
__p += '\n\t</a>\n\t<div class="clearfix btn-block col-xs-12">\n\t\t<a target="_blank" class="htruncate col-xs-12 btn-block" href="' +
((__t = ( attachment.downloadLink('download', attachment.get('id')) )) == null ? '' : __t) +
'" title="' +
__e( attachment.get('name') ) +
'">' +
__e( attachment.get('name') ) +
'\n\t\t<span class="show">Added <small class="text-muted"><abbr class="timeago" title="' +
__e( attachment.get('created') ) +
'">' +
__e( attachment.get("created") ) +
'</abbr></small></span>\n\t\t</a> \n\t\t';
if(!_.isUndefined(authuser.user)) {;
__p += '\n\t\t<div class="btn-toolbar navbar-btn">\n\t\t\t<div class="btn-group btn-group-xs navbar-btn">\n\t\t\t\t<div class="btn btn-primary">\n\t\t\t\t';
 var download_link = attachment.downloadLink('download', attachment.get('id')); ;
__p += '\n\t\t\t\t\t<a target="_blank" href="' +
((__t = ( download_link )) == null ? '' : __t) +
'" title="Download">\n\t\t\t\t\t\t<i class="icon-arrow-down cur icon-light"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "remove_card_attachment"}))){ ;
__p += '\n\t\t\t\t\t<div class="dropdown dropdown pull-left">\n\t\t\t\t\t\t<a href="#" title="Delete" class="js-show-confirm-delete-attachment dropdown-toggle btn btn-default btn-xs" data-toggle="dropdown"><i class="icon-remove cur"></i></a>\n\t\t\t\t\t\t<ul class="dropdown-menu arrow list-unstyled">\n\t\t\t\t\t\t\t<li class="js-dropdown-popup js-attachment-confirm-respons-' +
__e( attachment.id ) +
'"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</div>\n\t\t</div>\n\t\t';
 } ;
__p += '\n\t</div>\n';
 }else{ ;
__p += ' \n\t<span>No attachments available</span>\n';
 } ;
__p += ' ';

}
return __p
};

this["JST"]["templates/attachment_delete_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Attachment?</strong></span><a class="js-span-close-popup pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div><div class="col-xs-12"><p>Deleting an attachment is permanent. There is no undo.</p><a class="js-delete-attachment btn btn-primary" title="Delete Attachment">Delete</a></div>';

}
return __p
};

this["JST"]["templates/attachment_delete_confirm_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Attachment? </strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div><div class="col-xs-12"><p>Deleting an attachment is permanent. There is no undo.</p><a class="js-delete-attachment btn btn-primary" title="Delete Attachment">Delete</a></div>';

}
return __p
};

this["JST"]["templates/board"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 
	if(board.attributes.is_closed) {
		var style = '';
	if (board.attributes.background_picture_url || board.attributes.background_pattern_url || board.attributes.background_color) {
		style = 'color:#ffffff;';
	}
;
__p += '\n\n<div class="board-close-view">\n  <strong>Board is closed</strong>\n  <div class="dropdown well-sm text-center"><a data-toggle="dropdown" class="dropdown-toggle btn btn-primary" href="#">Click here to Reopen Board</a>\n        <ul class="dropdown-menu">\n      <li class="js-visibility-popup js-dropdown-popup dropdown-popup">\n        <div class="clearfix text-center col-xs-12">\n          <span class="col-xs-10"><strong>Reopen Board</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n        </div>\n\t\t<div class="col-xs-12 divider"></div>\n        <div class="col-xs-12  text-left">\n          <form class="normal" name="BoardReopenForm" id="BoardReopenForm">\n            <input id="inputBoardClose" name="is_closed" type="hidden" value="false">\n            <div class="h6 btn-block">Are you sure to "Reopen"?</div>\n            <div class="submit">\n              <input type="submit" value="Reopen" id="submitBoardReopen" class="btn btn-primary btn-sm">\n            </div>\n          </form>\n        </div>\n      </li>\n    </ul>\n  </div>\n  </div>\n  ';
 } else {;
__p += '\n  <section class="row body-no-webkit-scrollbars">\n\t\t<div id="switch-board-view" class="clearfix js-baord-view-' +
__e( board.id) +
'">\n\t\t\t<div id="js-board-lists" class="board-list-view boardlist-scrollbar">\n\t\t\t';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "add_list"}))){ ;
__p += '\n\t\t\t  <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 btn-block list" id="js-add-list-block">\n\t\t\t\t<div class="js-list-form"><a href="#" class="js-show-add-list-form toggle-show text-muted" title="Add a list">Add a list</a>\n\t\t\t\t  <form class="js-add-list hide">\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <label for="\n\t\t\t\t\t  inputListName" class="sr-only">Name</label>\n\t\t\t\t\t  <input type="text" id="inputListName" autocomplete="off" name="name" class="form-control" placeholder="Add a list" required maxlength="255">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <input type="submit" name="Save" class="btn btn-primary" value="Save">\n\t\t\t\t\t  <i class="icon-remove js-hide-add-list-form btn btn-link cur" title="Cancel"></i></div>\n\t\t\t\t  </form>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t  ';
 } ;
__p += '\n\t\t </div>          \n\t  </div>          \n  </section>\n  ';
 } ;


}
return __p
};

this["JST"]["templates/board_404"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="board-close-view">\n  <strong>Board not found</strong>\n  <div class="well-sm">This board may be private. ';
 if(!_.isEmpty(role_links.where({slug: "users_login"})) && _.isUndefined(authuser.user)){ ;
__p += 'You may be able to view it by <a href="#/users/login" class="text-primary" title="Login">logging</a> in. ';
	}  ;
__p += '\n  </div>\n  </div>';

}
return __p
};

this["JST"]["templates/board_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li>\n\t<div class="col-xs-12 text-center clearfix">\n\t\t<a href="#" class="js-show-organizations-board-from pull-left"><i class="icon-caret-left"></i></a>\n\t\t<span class="col-xs-10"><strong>Create Board</strong></span>\n\t\t<a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t</div>\n</li>\n<li class="col-xs-12 divider"></li>\n<li>\n\t<form class="col-xs-12" name="BoardAddForm" id="BoardAddForm">\n\t\t<div class="form-group">\n\t\t\t<label for="inputBoardName">Name</label>\n\t\t\t<input class="form-control input-sm" type="text" id="inputBoardName" name="name" required>\n\t\t</div>\n\t\t';
 if (templates.models.length > 0 && !_.isEmpty(role_links.where({slug: "view_organization_visibility"}))) { ;
__p += '\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="inputchecklist">Template</label>\n\t\t\t\t<select id="inputtemplatelist" class="js-chosen-select" name="template">\n\t\t\t\t\t<option value="">Select Template</option>\n\t\t\t\t\t';
 _.each(templates.models, function(template) { ;
__p += '\n\t\t\t\t\t<option value="' +
((__t = ( template.get('value') )) == null ? '' : __t) +
'">' +
__e( template.get('name') ) +
'</option>\n\t\t\t\t\t';
 });;
__p += '\n\t\t\t\t</select></div>';
 } ;
__p += '\n\t\t\t\t<div id="js-board-add-organization"></div>\n\t\t\t\t<input id="inputBoardAddVisibility" name="board_visibility" type="hidden" value="0">\n\t\t\t\t<div class="clearfix js-open-dropdown js-board-add-dropdown board-add-dropdown dropdown"> \n\t\t\t\t\t<span class="js-visibility-container">\n\t\t\t\t\t\t<span class="pull-left">\n\t\t\t\t\t\t\t<span class="pull-left navbar-btn">This board will be </span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<div class="btn-group pull-right">\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-sm js-change-visibility"><i class="icon-lock"></i>Private</button>\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-sm dropdown-toggle js-change-visibility" data-toggle="dropdown" aria-expanded="false">\n\t\t\t\t\t\t\t\t<span><i class="icon-caret-down"></i></span>\n\t\t\t\t\t\t\t\t<span class="sr-only">Toggle Dropdown</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</span>\n\t\t\t\t\t<div class="js-visibility-chooser dropdown-menu"></div>\n\t\t\t\t</div>\n\t\t\t\t\t<div class="submit"><input type="submit" value="Add" id="submitBoardAdd" class="btn btn-primary"></div></form></li>';

}
return __p
};

this["JST"]["templates/board_add_organization_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<label for="inputchecklist">Organization</label>\n';
 var organization_options = ''; _.each(organizations.models, function(organization) { organization_options += '<option value="' + organization.id + '">' + _.escape(organization.attributes.name) + '</option>'; }); ;
__p += '<select class="form-control cur" name="organization_id" id="inputListOrganization" required>';
 if (!_.isEmpty(organizations.models)) {;
__p += '<option value="">Please Select</option>' +
((__t = (organization_options )) == null ? '' : __t);
}else{;
__p += '<option value="">(none)</option>';
};
__p += '</select>';

}
return __p
};

this["JST"]["templates/board_additional_settings"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link"><i class="icon-caret-left"></i></a><span class="col-xs-10 navbar-btn"><strong>Additional Settings</strong></span></div><div class="col-xs-12 divider"></div><ul class="list-unstyled well-sm col-xs-12 js-board-dues"><li class="js-enable-covers js-AdditionalSettings-enabled ';
 if(!board.attributes.is_show_image_front_of_card) { ;
__p += ' hide ';
 } ;
__p += '"><div class="cur list-group-item well-sm">Card Cover Images Enabled <i class="icon-ok"></i></div></li><li class="clearfix js-enable-covers js-AdditionalSettings-enable list-group-item cur ';
 if(board.attributes.is_show_image_front_of_card) { ;
__p += ' hide ';
 } ;
__p += '">Enable Card Cover Images</li></ul>';

}
return __p
};

this["JST"]["templates/board_background"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n  <a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link"><i class="icon-caret-left"></i></a><span class="col-xs-10 navbar-btn"><strong>Change Background</strong></span>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12 member-modal js-pre-scrollable vertical-scrollbar clearfix">\n  <ul class="list-inline col-xs-offset-0">\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#34495e"><span class="background-box show well-lg" style="background-color:#34495e"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#23719f"><span class="background-box show well-lg" style="background-color:#23719f"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#5a966e"><span class="background-box show well-lg" style="background-color:#5a966e"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#bf4a40"><span class="background-box show well-lg" style="background-color:#bf4a40"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#5f778e"><span class="background-box show well-lg" style="background-color:#5f778e"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#0091ff"><span class="background-box show well-lg" style="background-color:#0091ff"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#46ba97"><span class="background-box show well-lg" style="background-color:#46ba97"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#f47564"><span class="background-box show well-lg" style="background-color:#f47564"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#819da2"><span class="background-box show well-lg" style="background-color:#819da2"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#47b7cd"><span class="background-box show well-lg" style="background-color:#47b7cd"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#95d9ad"><span class="background-box show well-lg" style="background-color:#95d9ad"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#f7b09c"><span class="background-box show well-lg" style="background-color:#f7b09c"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#b3bec1"><span class="background-box show well-lg" style="background-color:#b3bec1"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#bee5f3"><span class="background-box show well-lg" style="background-color:#bee5f3"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#caefd2"><span class="background-box show well-lg" style="background-color:#caefd2"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#f7d2c8"><span class="background-box show well-lg" style="background-color:#f7d2c8"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#444444"><span class="background-box show well-lg" style="background-color:#444444"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#4f4d7e"><span class="background-box show well-lg" style="background-color:#4f4d7e"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#2f663c"><span class="background-box show well-lg" style="background-color:#2f663c"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#a37e58"><span class="background-box show well-lg" style="background-color:#a37e58"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#6b6b6b"><span class="background-box show well-lg" style="background-color:#6b6b6b"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#7b5cb3"><span class="background-box show well-lg" style="background-color:#7b5cb3"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#65ab36"><span class="background-box show well-lg" style="background-color:#65ab36"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#bd6f32"><span class="background-box show well-lg" style="background-color:#bd6f32"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#999999"><span class="background-box show well-lg" style="background-color:#999999"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#baa1e6"><span class="background-box show well-lg" style="background-color:#baa1e6"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#9dbb1d"><span class="background-box show well-lg" style="background-color:#9dbb1d"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#ffce54"><span class="background-box show well-lg" style="background-color:#ffce54"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#d5d5d5"><span class="background-box show well-lg" style="background-color:#d5d5d5"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#dbcff1"><span class="background-box show well-lg" style="background-color:#dbcff1"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#ccdc87"><span class="background-box show well-lg" style="background-color:#ccdc87"></span></li>\n    <li class="list-inline js-change-color board-background-select navbar-btn cur" data-color="#f1eabf"><span class="background-box show well-lg" style="background-color:#f1eabf"></span></li>\n  </ul>\n  <h4>Photos</h4>\n  ';
 if (!_.isEmpty(board.attributes.background_picture_url) && board.attributes.background_picture_url != 'NULL') {
	   var background_picture_url = (board.attributes.background_picture_url).replace("_XXXX.jpg", "_s.jpg"); 
  ;
__p += '\n\t  <ul class="list-inline col-xs-offset-0 clearfix">\n\t\t<li class="list-inline board-background-select navbar-btn cur col-xs-12">\n\n\t\t<ul class="list-inline clearfix">\n\t\t<li class="pull-left">\n\t\t\t<span class="background-box show well-lg" style="background-image:url(' +
((__t = ( background_picture_url )) == null ? '' : __t) +
'); background-size:cover;"></span>\n\t\t</li>\n\t\t<li class="pull-left col-xs-8">\n\t\t\t<div class="clearfix">\n\t\t\t\t<p class="col-xs-5 nav htruncate">\n\t\t\t\t';
 if (!_.isEmpty(board.attributes.background_name) && board.attributes.background_name != 'NULL') { ;
__p += '\n\t\t\t\t\t' +
((__t = ( board.attributes.background_name )) == null ? '' : __t) +
' \n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</p>\n\t\t\t\t<div class="pull-right">\n\t\t\t\t\t<div class="btn-group btn-group-xs navbar-btn">\n\t\t\t\t\t\t<a class="btn btn-primary js-modal-fliker-trigger" title="change" href="#" data-type="image" data-toggle="modal" data-target="#modalFlickrPhoto">Change</a>\n\t\t\t\t\t\t<div class="dropdown btn btn-default">\n\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" title="Delete" href="#">\n\t\t\t\t\t\t\t\t<i class="icon-remove cur js-delete-background-img"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled">\n\t\t\t\t\t\t\t\t<li id="js-attachment-confirm-respons-22" class="js-dropdown-popup">\n\t\t\t\t\t\t\t\t  <div>\n\t\t\t\t\t\t\t\t\t<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Attachment?</strong></span><a href="#" class="js-span-close-popup pull-right"><i class="icon-remove"></i></a></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-left">\n\t\t\t\t\t\t\t\t\t  <p>Deleting an background photo. There is no undo.</p>\n\t\t\t\t\t\t\t\t\t  <a title="Delete background photo" class="btn btn-primary btn-large">Delete</a></div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<small class="navbar-btn">Powered by <a href="javascript:void(0);" title="Flickr"><strong class="text-primary">Flickr</strong></a></small>\n\t\t\t</div>\t\t\n\t\t</li>\n\t\t</ul>\t\n\t\t\n\t\t\n\t\t</li>\n\t  </ul>\n  ';
 } else { ;
__p += '\n\t <a href="#" class="js-modal-fliker-trigger"  data-type="image" data-toggle="modal" data-target="#modalFlickrPhoto">Choose...</a>\n  ';
 } ;
__p += '  \n\n  <h4>Patterns and Textures</h4>\n  ';
 if (!_.isEmpty(board.attributes.background_pattern_url) && board.attributes.background_pattern_url != 'NULL') { 
		var background_pattern_url = (board.attributes.background_pattern_url).replace("_XXXX.jpg", "_s.jpg"); 
  ;
__p += '\t\t\n <ul class="list-inline col-xs-offset-0 clearfix">\n    <li class="list-inline board-background-select navbar-btn cur col-xs-12">\n\t\n\t\t\t\t<ul class="list-inline clearfix">\n\t\t<li class="pull-left">\n\t\t\t<span class="background-box show well-lg" style="background-image:url(' +
((__t = ( background_pattern_url )) == null ? '' : __t) +
'); background-size:cover;"></span>\n\t\t</li>\n\t\t<li class="pull-left col-xs-8">\n\t\t\t<div class="clearfix">\n\t\t\t\t<p class="col-xs-5 nav htruncate"> ';
 if (!_.isEmpty(board.attributes.background_name) && board.attributes.background_name != 'NULL') { ;
__p += '\n\t\t\t\t\t' +
((__t = ( board.attributes.background_name )) == null ? '' : __t) +
' \n\t\t\t\t';
 } ;
__p += ' </p>\n\t\t\t\t<div class="pull-right">\n\t\t\t\t\t<div class="btn-group btn-group-xs navbar-btn">\n\t\t\t\t\t\t<a class="btn btn-primary js-modal-fliker-trigger" title="change" href="#" data-type="texture" data-toggle="modal" data-target="#modalFlickrPhoto">Change</a>\n\t\t\t\t\t\t<div class="dropdown btn btn-default">\n\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" title="Delete" href="#">\n\t\t\t\t\t\t\t\t<i class="icon-remove cur js-delete-background-img"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled">\n\t\t\t\t\t\t\t\t<li id="js-attachment-confirm-respons-22" class="js-dropdown-popup">\n\t\t\t\t\t\t\t\t  <div>\n\t\t\t\t\t\t\t\t\t<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Attachment?</strong></span><a href="#" class="js-span-close-popup pull-right"><i class="icon-remove"></i></a></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-left">\n\t\t\t\t\t\t\t\t\t  <p>Deleting an background photo. There is no undo.</p>\n\t\t\t\t\t\t\t\t\t  <a title="Delete background photo" class="btn btn-primary btn-large">Delete</a></div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<small class="navbar-btn">Powered by <a href="javascript:void(0);" title="Flickr"><strong class="text-primary">Flickr</strong></a></small>\n\t\t\t</div>\t\t\n\t\t</li>\n\t\t</ul>\n\t\t\n\t</li>\n  </ul>\n  ';
 } else { ;
__p += '\n\t <a href="#" class="js-modal-fliker-trigger" data-type="texture" data-toggle="modal" data-target="#modalFlickrPhoto">Choose...</a>\n  ';
 } ;
__p += '  \n \n  \n \n  <h4>Custom<span class="clearfix navbar-btn col-xs-7 pull-right"><span id="custom-dropzone-cssloader"></span></span></h4>\n  <ul class="js-board-background-custom-lists list-inline">\n    ';
 board.custom_attachments.each(function(custom_attachment) { ;
__p += '\n    <li class="js-change-custom-background board-background-select navbar-btn cur" data-background="' +
((__t = ( custom_attachment.get('path') )) == null ? '' : __t) +
'"><span class="background-box show well-lg" style="background-image:url(' +
((__t = ( custom_attachment.get('path') )) == null ? '' : __t) +
'"></span></li>\n    ';
 }); ;
__p += '\n  </ul>\n\n';
 if(!_.isEmpty(role_links.where({slug: "add_custom_background"}))){ ;
__p += '\n<div class="clearfix col-xs-12" id="custom-background-dropzone">\n\t<form id="js-board-custom-background-form" class="form-horizontal clearfix  js-cusotm-background-add" role="form" enctype="multipart/form-data">\n\t\t<div id="manager-area" class="js-cusotm-background-dropzone empty-block js-computer-open-board-background">\n\t\t\tDrop files to upload\n\t\t</div>\n\t</form>\n</div>\n';
 } ;
__p += '\n<div class="col-xs-12 member-modal clearfix btn-block">\n<h4>Productivity Beats</h4>\n';
 if (!_.isEmpty(board.attributes.music_content) && board.attributes.music_content != 'NULL') { ;
__p += '\n <ul class="list-inline col-xs-offset-0 clearfix">\n    <li class="clearfix col-xs-12">\n\t\n\t  <ul class="list-inline col-xs-offset-0">\n\t\t<li class="list-inline board-background-select navbar-btn cur col-xs-12">\n\n\t\t<ul class="list-inline clearfix">\n\t\t<li class="pull-left col-xs-12">\n\t\t\t<div class="clearfix">\n\t\t\t\t<p class="col-xs-7 nav htruncate">\n\t\t\t\t' +
((__t = ( board.attributes.music_name )) == null ? '' : __t) +
'\n\t\t\t\t</p>\n\t\t\t\t<div class="pull-right">\n\t\t\t\t\t<div class="btn-group btn-group-xs navbar-btn">\n\t\t\t\t\t\t<a class="btn btn-primary js-modal-music-trigger" title="change" href="#" data-toggle="modal" data-target="#modalMusic">Change</a>\n\t\t\t\t\t\t<div class="dropdown btn btn-default">\n\t\t\t\t\t\t\t<a data-toggle="dropdown" class="dropdown-toggle" title="Delete" href="#">\n\t\t\t\t\t\t\t\t<i class="icon-remove cur js-music-clear"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled">\n\t\t\t\t\t\t\t\t<li id="js-attachment-confirm-respons-22" class="js-dropdown-popup">\n\t\t\t\t\t\t\t\t  <div>\n\t\t\t\t\t\t\t\t\t<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Delete Attachment?</strong></span><a href="#" class="js-span-close-popup pull-right"><i class="icon-remove"></i></a></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-left">\n\t\t\t\t\t\t\t\t\t  <p>Deleting an background photo. There is no undo.</p>\n\t\t\t\t\t\t\t\t\t  <a title="Delete background photo" class="btn btn-primary btn-large">Delete</a></div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</li>\n\t\t</ul>\t\n\t\n\t</li>\n  </ul>\n  ';
 } else { ;
__p += '\n\t<a href="#" class="js-modal-music-trigger" data-toggle="modal" data-target="#modalMusic">Add ...</a>\n  ';
 } ;
__p += '  \n</div>\n</div>';

}
return __p
};

this["JST"]["templates/board_custom_background"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span class="background-box" style="background-image:url(' +
((__t = (board_background.attributes.custom_attachments.path)) == null ? '' : __t) +
'"></span>';

}
return __p
};

this["JST"]["templates/board_filter"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link">\n\t\t\t<i class="icon-caret-left"></i>\n\t</a>\n\t<span class="col-xs-10 navbar-btn"><strong>Filter Cards</strong></span>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12 member-modal js-pre-scrollable vertical-scrollbar">\n\t';
 if (board.labels.length > 0) { ;
__p += '\n\t<ul class="nav nav-pills nav-stacked js-board-labels">\n\t';

	var labels = board.labels.pluck("name");
	labels = _.uniq(labels, function(label) { 
		return label;
	});
	 _.each(labels, function(label) { ;
__p += ' \n\t\t<li class="clearfix js-toggle-label-filter cur card-label-show h5 btn-link media">\n\t\t\t<span style="background:#' +
__e( converter.colorCode(''+label).substring(0, 6) ) +
';color:#ffffff" class="pull-left btn btn-xs"><i class="' +
((__t = ( LABEL_ICON )) == null ? '' : __t) +
' icon-light"></i></span><div class="htruncate js-label">' +
__e(label ) +
'</div>\n\t\t</li> \n\t';
 }); ;
__p += '\n\t</ul>\n\t<hr>\n\t';
 } ;
__p += '\n\t';
 if (board.board_users.length > 0) { ;
__p += '\n\t<ul class="nav nav-pills nav-stacked js-board-users">\n\t\t';
 board.board_users.each(function(board_user) { ;
__p += '\n\t\t<li class="clearfix js-toggle-member-filter cur h5 btn-link">\n\t\t\t<div class="navbar-btn clearfix media">\n\t\t\t\t<span class="pull-left">\n\t\t\t\t\t';
 if(!_.isEmpty(board_user.attributes.profile_picture_path)){ 
						var profile_picture_path = board_user.showImage('User', board_user.attributes.user_id, 'small_thumb' );
			
					;
__p += '\n\t\t\t\t\t\t<img class="img-rounded img-responsive" src="' +
__e( profile_picture_path) +
'" alt="[Images: ' +
__e( board_user.attributes.username) +
']" title="' +
__e( board_user.attributes.username) +
'" />\n\t\t\t\t\t';
 }else{ ;
__p += '\n\t\t\t\t\t\t<i class="avatar avatar-color-194 img-rounded" title="' +
__e( board_user.attributes.username) +
'">' +
__e( board_user.attributes.initials) +
'</i>\n\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t</span>\t\t\t\n\t\t\t\t<span class="pull-left navbar-btn">\n\t\t\t\t\t' +
__e(board_user.attributes.username ) +
'\n\t\t\t\t\t<span class="js-user hide">user-filter-' +
__e(board_user.attributes.user_id ) +
'</span>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</li>\n\t\t';
 }); ;
__p += '\n\t</ul>\n\t<hr>\n\t';
 } ;
__p += '\n\t<ul class="nav nav-pills nav-stacked js-board-dues">\n\t\t<li class="clearfix js-due-filter cur h5 btn-link"><div class="navbar-btn clearfix media">Due in the next day <span class="js-due hide">day</span></div></li>\n\t\t<li class="clearfix js-due-filter cur h5 btn-link"><div class="navbar-btn clearfix media">Due in the next week <span class="js-due hide">week</span></div></li>\n\t\t<li class="clearfix js-due-filter cur h5 btn-link"><div class="navbar-btn clearfix media">Due in the next month <span class="js-due hide">month</span></div></li>\n\t\t<li class="clearfix js-due-filter cur h5 btn-link"><div class="navbar-btn clearfix media">Overdue <span class="js-due hide">overdue</span></div></li>\n\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/board_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += ' <div class="container-fluid">\n\t <div class="row">\n\t\t\t  <div class="navbar-left navbar-btn mob-no-mar col-sm-11 col-xs-10 nav ';
 if(board.attributes.organization_id == 0) { ;
__p += ' col-lg-6 col-md-5 ';
 } else { ;
__p += ' col-lg-5 col-md-4';
 } ;
__p += '">\n\t\t\t  <div class="clearfix row-flex">\n\t\t\t  <ul class="nav nav-pills pull-left col-flex col-flex1 ';
 if(board.attributes.organization_id == 0) { ;
__p += ' hide ';
 } ;
__p += '">\n\t\t\t  ';
 if(board.attributes.organization_id != 0) { ;
__p += '\n               <li>\n\t\t\t\t<a href="#/organization/' +
((__t = ( board.attributes.organization_id )) == null ? '' : __t) +
'" class=" text-muted btn btn-link pull-left htruncate col-lg-10 col-sm-10 col-md-9 col-xs-9 nav" title="' +
__e( board.attributes.organization_name ) +
'">\n\t\t\t\t\t';

						var logo_path = "img/default-organization.png"; 
						if (!_.isUndefined(board.attributes.organization_logo_url) && board.attributes.organization_logo_url != null && board.attributes.organization_logo_url != '') {
							logo_path = board.showImage('Organization', board.attributes.organization_id, 'small_thumb' );
						}
					;
__p += '\n\t\t\t\t\t<span><img src="' +
((__t = ( logo_path )) == null ? '' : __t) +
'" height="16" width="16" alt="[Image: ' +
((__t = ( board.attributes.organization_name)) == null ? '' : __t) +
']" title="' +
((__t = ( board.attributes.organization_name)) == null ? '' : __t) +
'"></span> \n\t\t\t\t\t<strong>' +
__e( board.attributes.organization_name ) +
'</strong>\n\t\t\t\t</a>\n\t\t\t\t<span class="well-sm navbar-btn mob-no-mar pull-left">/</span>\n\t\t\t   </li>\n\t\t\t   ';
 } ;
__p += '\n\t\t\t</ul>\n\t\t\t<div class="well-sm pull-left navbar-btn mob-no-mar col-flex ';
 if(board.attributes.organization_id != 0) { ;
__p += ' col-flex2 ';
 } else { ;
__p += ' col-flex3  ';
 } ;
__p += '">\t\n\t\t\t\t\t  <form name="BoardStarForm" id="BoardStarForm">\n\t\t\t\t\t\t<input id="inputBoardStar" name="is_starred" type="hidden" value="';
if(!_.isUndefined(star)) {;
__p +=
__e( star.attributes.is_starred );
}else{;
__p += '0';
};
__p += '">\n\t\t\t\t\t  </form>\n\t\t\t\t\t<div class="col-xs-12 nav pull-left ';
 if(!_.isEmpty(role_links.where({slug: 'edit_board'}))){ ;
__p += 'dropdown';
 } ;
__p += '">\n\t\t\t\t\t  ';
 if(!_.isUndefined(star) && (star.attributes.is_starred || star.attributes.is_starred == 't')) { ;
__p += '\n\t\t\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t  <a href="#" class="js-star-board pull-left" name="unstar" title="unstar"><i class="icon-star text-primary"></i></a>\n\t\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t\t  ';
 } else {;
__p += '\n\t\t\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "unstarred_board"}))){ ;
__p += '\n\t\t\t\t\t  <a href="#" class="js-star-board pull-left" name="star" title="star"><i class="icon-star-empty"></i></a>\n\t\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t\t  <a href="#" class="js-star-load pull-left text-primary hide"><img src="img/star-load.gif" alt="[Images: Star]" title="Star"></a><a href="#" class="col-xs-8 nav htruncate ';
if(!_.isUndefined(authuser.user)) {;
__p += 'js-rename-board';
}else{;
__p += 'js-no-action';
};
__p += '" data-toggle="';
 if(!_.isEmpty(role_links.where({slug: 'edit_board'}))){ ;
__p += 'dropdown';
 } ;
__p += '" title="' +
__e( board.attributes.name ) +
'"><strong>' +
__e( board.attributes.name ) +
'</strong></a>\n\t\t\t\t  ';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "edit_board"}))){ ;
__p += '\n\t\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow arrow-left">\n\t\t\t\t\t<li class="js-rename-popup js-dropdown-popup dropdown-popup">\n\t\t\t\t\t  <div class="clearfix text-center col-xs-12">\n\t\t\t\t\t\t<span class="col-xs-10"><strong>Rename Board</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="col-xs-12 divider"></div>\n\t\t\t\t\t  <div class="col-xs-12 text-left">\n\t\t\t\t\t\t<form class="normal" name="BoardRenameForm" id="BoardRenameForm">\n\t\t\t\t\t\t  <div class="required form-group">\n\t\t\t\t\t\t\t<label for="inputBoardName">Name</label>\n\t\t\t\t\t\t\t<input type="text" id="inputBoardName" name="name" class="form-control input-sm" value="' +
__e( board.attributes.name ) +
'" required>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class="submit">\n\t\t\t\t\t\t\t<input type="submit" value="Rename" id="submitBoardRename" class="btn btn-primary btn-sm">\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</li>\n\t\t\t\t  </ul>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t <div class="navbar-header"><button data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle" type="button"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button></div>\n\t\t\t<nav class="navbar-collapse collapse mob-no-pad">\n\t\t\t  <div class="navbar-right">\n\t\t\t  ';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t\t\t  <ul class="nav nav-pills pull-left pillsuser-list">\n\t\t\t\t  <li class="dropdown navbar-btn"> <a href="javascript:void(0);" data-toggle="dropdown" class="dropdown-toggle show clearfix navbar-btn h4">\n\t\t\t\t  ';
 
			  var i = 1;
			  var admin_board_users_count = board.admin_board_users.length;
			  var normal_board_users_count = board.normal_board_users.length;
			  _.each(board.admin_board_users, function(admin_board_user){ 
				if(i <= 3){
			  ;
__p += '\n            \t<span class="pull-left btn-xs nav">\n\t\t\t\t\t<span class="col-xs-12 btn-block navbar-btn" title="' +
__e(admin_board_user.attributes.username ) +
'">\n\t\t\t\t\t\t';
 if(!_.isEmpty(admin_board_user.attributes.profile_picture_path)) {
								var profile_picture_path = board.showImage('User', admin_board_user.attributes.user_id, 'small_thumb' );;
__p += '\n\t\t\t\t\t\t<img  width="30" height="30" class="img-responsive img-rounded avatar" title="' +
__e(admin_board_user.attributes.username ) +
'" alt="[Images: ' +
__e(admin_board_user.attributes.username ) +
']" src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
((__t = ( (admin_board_user.attributes.initials) )) == null ? '' : __t) +
'</i>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t';
 if(admin_board_user.attributes.is_admin) { ;
__p += '\n\t\t\t\t\t\t\t<span class="name-block col-xs-12 label btn-xs col-xs-push-0">Owner</span>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t  ';
 i++; }}); ;
__p += '\n\t\t\t  ';
 if(admin_board_users_count < 3){ 
			   _.each(board.normal_board_users, function(normal_board_user){
				if(i <= 3){
				var mobHidden='';
				if(i !== 1){
				  mobHidden = 'hidden-xs';
				}
			  ;
__p += '\n            \t<span class="pull-left btn-xs nav ' +
__e( mobHidden ) +
'">\n\t\t\t\t\t<span class="col-xs-12 btn-block navbar-btn" title="' +
__e(normal_board_user.attributes.username ) +
'">\n\t\t\t\t\t\t';
 if(!_.isEmpty(normal_board_user.attributes.profile_picture_path)) {
								var profile_picture_path = board.showImage('User', normal_board_user.attributes.user_id, 'small_thumb' );;
__p += '\n\t\t\t\t\t\t<img  width="30" height="30" class="img-responsive img-rounded" title="' +
__e(normal_board_user.attributes.username ) +
'" alt="[Images: ' +
__e(normal_board_user.attributes.username ) +
']" src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
((__t = ( (normal_board_user.attributes.initials) )) == null ? '' : __t) +
'</i>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t  ';
 i++; }}); };
__p += '\n\t\t\t\t  <span class="col-xs-3 label small hidden-xs"> <span class="small navbar-btn"><span class="show text-left" title="Owner ' +
((__t = ( admin_board_users_count )) == null ? '' : __t) +
'">Owner ' +
__e( admin_board_users_count ) +
'</span> <span class="show navbar-btn text-left" title="Member ' +
((__t = ( normal_board_users_count )) == null ? '' : __t) +
'">Member ' +
__e( normal_board_users_count ) +
'</span></span> </span> </a>\n\t\t\t\t\t<ul class="list-unstyled js-visibility-chooser dropdown-menu arrow arrow-right">\n\t\t\t\t\t  <li class="text-center">\n\t\t\t\t\t\t<strong>Members</strong>\n\t\t\t\t\t\t<span href="#" class="js-close-popover pull-right col-xs-2"><i class="icon-remove cur"></i></span>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  <li class="divider"></li>\n\t\t\t\t\t  <li class="col-xs-12">\n\t\t\t\t\t\t<ul class="list-unstyled clearfix js-get-board-member-lists-response">\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t';
 if(!is_offline_data){ ;
__p += '\n\t\t\t\t\t\t';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t\t\t\t\t<ul class="list-unstyled clearfix js-hide-on-offline">\n\t\t\t\t\t\t<li class="col-xs-12 navbar-btn text-left">\n\t\t\t\t\t\t\t\t<div class="js-add-board-member-dropdown dropdown inner-dropdown col-xs-12"> \n\t\t\t\t\t\t\t\t\t<a href="#" class="text-muted" data-toggle="dropdown">Add Members...</a>\n\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow">\n\t\t\t\t\t\t\t\t\t\t<li class="js-dropdown-popup dropdown-popup">\n\t\t\t\t\t\t\t\t\t\t  <div class="col-xs-12 text-center clearfix">\n\t\t\t\t\t\t\t\t\t\t\t<span class="col-xs-10"><strong>Members</strong></span><a class="js-close-popover-board-member-dropdown pull-right" href="#"><i class="icon-remove"></i></a>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t\t\t  <div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t\t\t<form method="post" class="text-center" id="js-add-board-member-form">\n\t\t\t\t\t\t\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class="sr-only">Search Member</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="text" autocomplete="off" id="inputBoardUserSearch" placeholder="Username OR Email" name="email" required class="js-search-users form-control input-sm">\n\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t  <ul class="list-unstyled js-board-member-search-response col-xs-12 pre-scrollable vertical-scrollbar">\n\t\t\t\t\t\t\t\t\t\t\t<li class="clearfix small">Search for a person in ' +
__e( SITE_NAME ) +
' by name or email address.</li>\n\t\t\t\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t</ul>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t<ul class="nav nav-pills pull-left navbar-btn">\n\t\t\t\t\t';
 if (is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t\t\t\t<li class="navbar-btn">\n\t\t\t\t\t\t<div class="btn-group navbar-btn js-visibility-list-dropdown dropdown">\n\t\t\t\t\t\t\t';
 	var board_visibility = '';
								var board_visibility_icon = '';
								if(board.attributes.board_visibility == 0) { 
									board_visibility = 'Private';
									board_visibility_icon = 'icon-lock';
								} else if(board.attributes.board_visibility == 1 && board.attributes.organization_id > 0) {
									board_visibility = 'Organization';
									board_visibility_icon = 'icon-group';
								} else if(board.attributes.board_visibility == 2) {
									board_visibility = 'Public';
									board_visibility_icon = 'icon-circle';
								}
							;
__p += '\n\t\t\t\t\t\t\t<button class="btn btn-default btn-sm js-board-visibility" type="button"><i class="' +
__e( board_visibility_icon) +
'"></i><span class="hidden-xs">' +
((__t = ( board_visibility )) == null ? '' : __t) +
'</span></button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<button data-toggle="dropdown" class="btn btn-default btn-sm dropdown-toggle active js-board-visibility" type="button"> <span><i class="icon-caret-down cur"></i></span> <span class="sr-only">Toggle Dropdown</span> </button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right col-xs-push-0">\n\t\t\t\t\t\t\t\t<li class="js-visibility-popup js-dropdown-popup dropdown-popup col-xs-12">          \n\t\t\t\t\t\t\t\t\t<div class="clearfix text-center"><a class="js-back-to-board-visibility hide pull-left" href="#"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Change Visibility</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="col-xs-12 divider js-visibility-list"></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t              </li>\n\t\t\t\t  ';
 } else { ;
__p += '\n\t\t\t\t\t<li class="navbar-btn">\n\t\t\t\t\t\t<div class="btn-group navbar-btn js-visibility-list-dropdown dropdown">\n\t\t\t\t\t\t\t';
 	var board_visibility = '';
								var board_visibility_icon = '';
								if(board.attributes.board_visibility == 0) { 
									board_visibility = 'Private';
									board_visibility_icon = 'icon-lock';
								} else if(board.attributes.board_visibility == 1 && board.attributes.organization_id > 0) {
									board_visibility = 'Organization';
									board_visibility_icon = 'icon-group';
								} else if(board.attributes.board_visibility == 2) {
									board_visibility = 'Public';
									board_visibility_icon = 'icon-circle';
								}
							;
__p += '\n\t\t\t\t\t\t\t<button class="btn btn-default btn-sm" type="button"><i class="' +
__e( board_visibility_icon) +
'"></i><span class="hidden-xs">' +
((__t = ( board_visibility )) == null ? '' : __t) +
'</span></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t  <li>\n\t\t\t\t\t<form name="BoardSubscribeForm" id="BoardSubscribeForm">\n\t\t\t\t\t  <input id="inputBoardSubscribe" name="is_subscribed" type="hidden" value=" ';
 if(!_.isUndefined(subscriber)) { ;
__p += ' ' +
__e( subscriber.attributes.is_subscribed );
}else{;
__p += '0';
};
__p += '">\n\t\t\t\t\t</form> \n\t\t\t\t\t';
 if(!_.isUndefined(subscriber) && subscriber.attributes.is_subscribed) { ;
__p += '\n\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "subscribe_board"}))){ ;
__p += '\n\t\t\t\t\t<a href="#" class="js-subscribe-board navbar-btn h4" name="unsubscribe" title="Unsubscribe" data-placement="bottom" data-toggle="tooltip"><i class="icon-eye-close"></i><span class="hidden-xs">Unsubscribe</span></a>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "unsubscribe_board"}))){ ;
__p += '\n\t\t\t\t\t<a href="#" class="js-subscribe-board navbar-btn h4" name="subscribe" title="Subscribe" data-placement="bottom" data-toggle="tooltip"><i class="icon-eye-open"></i><span class="hidden-xs">Subscribe</span></a>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t  </li>\n\t\t\t\t  <li class="js-switch-view"><a href="#" class=" navbar-btn h4 js-switch-grid-view text-muted initialism" title="Grid" data-placement="bottom" data-toggle="tooltip"><i class="icon-th"></i></a></li>\n\t\t\t\t  <li class="js-switch-view"><a href="#" class=" navbar-btn h4 js-switch-list-view text-muted initialism" title="List" data-placement="bottom" data-toggle="tooltip"><i class="icon-list-ul"></i></a></li>\n\t\t\t\t  <li class="js-switch-view"><a href="#" class=" navbar-btn h4 js-switch-calendar-view text-muted initialism" title="Calendar" data-placement="bottom" data-toggle="tooltip"><i class="icon-calendar"></i></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div class="pull-right dropdown navbar-btn"> \n\t\t\t\t  <a data-toggle="dropdown" class=" navbar-btn h4 btn btn-primary dropdown-toggle js-back-setting-response col-sm-offset-1 show" type="button"><i class="icon-cog h3 cur"></i></a>\n\t\t\t\t  <ul class="dropdown-menu arrow arrow-right col-xs-12 js-setting-response">\n\t\t\t\t\t\t\t<li class="js-list-form"><a class="nav-list-item js-show-filters" href="#"><span class="icon-sm icon-filter icon-type"></span> Filter Cards</a></li>\n\t\t\t\t\t\t\t';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_archived_lists"})) || !_.isEmpty(role_links.where({slug: "view_archived_cards"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t<li><a class="nav-list-item js-archived-items" href="#"><span class="icon-sm icon-archive icon-type"></span> Archived Items</a></li>\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_sync_calendar"}))){ ;
__p += '\n\t\t\t\t\t\t\t<li class="js-sync-google-dropdown inner-dropdown"><a href="#" class="js-syn-google-calendar" data-toggle="dropdown"><span class="icon-calendar"></span>Sync with Google Calendar</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t\t\t';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t\t\t\t\t\t';
 
								var background_color = board.attributes.background_color; 
								var background_picture_url = board.attributes.background_picture_url; 
								var background_pattern_url = board.attributes.background_pattern_url; 
								var preview = ''; 
								if (!_.isEmpty(background_picture_url) && background_picture_url != 'NULL') { 
									background_picture_url = background_picture_url.replace("_XXXX.jpg", "_b.jpg");
									preview = '<span style="background-image:url(' + background_picture_url + ');" class="background-box show well-lg"></span>'; 
								 } else if (!_.isEmpty(background_pattern_url) && background_pattern_url != 'NULL') { 
									background_pattern_url = background_pattern_url.replace("_XXXX.jpg", "_b.jpg");
									preview = '<span style="background-image:url(' + background_pattern_url + ');" class="background-box show well-lg"></span>'; 
								 } else if (!_.isEmpty(background_color) && background_color != 'NULL') { 
									preview = '<span style="background-color:' + background_color + '" class=" background-box show well-lg"></span>'; 
								 }
							;
__p += '\n\t\t\t\t\t\t\t<li><a href="#" class="nav-list-item nav-list-sub-item js-change-background"> Change Background</a></li>\n\t\t\t\t\t';
 };
__p += '\n\t\t\t\t\t';
 if(!is_offline_data) {;
__p += '\n\t\t\t\t\t\t\t<li class="js-sync-google-dropdown inner-dropdown"><a data-toggle="dropdown" href="#" class="js-show-copy-board">Copy Board</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t';
 };
__p += '\n\t\t\t\t\t\t\t';
 };
__p += '\n\t\t\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t\t\t<li><a href="#" class="js-show-board-modal" data-toggle="modal" data-target="#modalListView">Show Attachments</a></li>\n\t\t\t\t\t\t\t';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t\t\t\t\t\t<li><a href="#" class="js-additional-settings">Additional Settings</a></li>\n\t\t\t\t\t\t\t<li class="dropdown js-open-dropdown inner-dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Close Board</a>\n\t\t\t\t\t\t\t  <ul class="dropdown-menu arrow pull-right">\n\t\t\t\t\t\t\t\t<li class="js-dropdown-popup dropdown-popup">\n\t\t\t\t\t\t\t\t  <div class="clearfix text-center col-xs-12">\n\t\t\t\t\t\t\t\t\t<span class="col-xs-10"><strong>Close Board</strong></span><a class="js-close-sub-popover pull-right" href="#"><i class="icon-remove"></i></a>\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  <div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t  <div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t<form class="normal col-xs-12" name="BoardCloseForm" id="BoardCloseForm">\n\t\t\t\t\t\t\t\t\t  <input id="inputBoardClose" name="is_closed" type="hidden" value="true">\n\t\t\t\t\t\t\t\t\t  <p>You can reopen the board by clicking the "Boards" menu from the header, selecting "View Closed Boards", finding the board and clicking "Reopen".</p>\n\t\t\t\t\t\t\t\t\t  <div class="submit">\n\t\t\t\t\t\t\t\t\t\t<input type="submit" value="Close" id="submitBoardClose" class="btn btn-primary js-close-board">\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t  </nav>\n\t\t</div>\n\t</div>\n';

}
return __p
};

this["JST"]["templates/board_index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  ';
 if(!_.isEmpty(role_links.where({slug: "view_my_boards"}))){ ;
__p += '\n  <div class="btn-block clearfix">\n    <div class="col-xs-12 js-my-boards mob-no-pad">\n     \n    </div>\n  </div>\n  ';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/board_index_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="container-fluid">\n\t<div class="row">\n        <div class="navbar-left navbar-btn">\n            <div class="clearfix navbar-btn">\n                <h2 class="navbar-left navbar-btn"><span class="navbar-left"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a></span>\n\t\t\t\t\t<ul class="list-inline navbar-left h3 navbar-btn navbar-form text-center">\n\t\t\t\t\t\t <li class="navbar-btn text-muted"><span class="h5">/</span></li>\n\t\t\t\t\t\t<li><span class="text-muted h4">' +
((__t = (page_title)) == null ? '' : __t) +
'</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</h2>\n            </div>\n        </div>\n      <div class="navbar-right navbar-btn h4">\n        <ul class="nav nav-pills navbar-left">\n\t\t\t<li class="';
  var fragment = Backbone.history.fragment; var fragments = fragment.split('/'); if(fragment.indexOf('boards')  != -1 && fragments.length == 1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards" title="My Boards" class="text-muted initialism"><i class="icon-user"></i></a></li>\n            <li class="';
 if(Backbone.history.fragment.indexOf('boards/closed') != -1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards/closed" title="Closed Boards" class="text-muted initialism"><i class="icon-th-large"></i></a></li>\n            <li class="';
 if(Backbone.history.fragment.indexOf('boards/starred') != -1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards/starred" title="Starred Boards" class="text-muted initialism"><i class="icon-star"></i></a></li>\n        </ul>\n        </div>\n    </div>\n</div>    ';

}
return __p
};

this["JST"]["templates/board_member_add_search_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(user != null){ ;
__p += '\n<a title="' +
__e( user.attributes.username ) +
'" href="#"> <span>\t\t\t\t\n\t\t\t\t';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
					var profile_picture_path = user.showImage('User', user.attributes.id, 'micro_thumb' );
				;
__p += '\n\t\t\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded img-responsive avatar  avatar-sm">\n\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</span><span>' +
__e( user.attributes.username ) +
'</span></a>\n';
 } else{ ;
__p += '\n\tNo users available.\n';
 } ;
__p += '\t\t\t';

}
return __p
};

this["JST"]["templates/board_organization_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 

	var organization_options = ''; 
	var is_org_found = false;
	var display_options = false;
	_.each(organizations.models, function(organization) { 
		display_options = true;
		if(parseInt(organization.id) === board.attributes.organization_id){
			is_org_found = true;
		}
		var selected = (parseInt(organization.id) === board.attributes.organization_id) ? 'selected="selected"' : '';
		var current = (parseInt(organization.id) === board.attributes.organization_id) ? ' (current)' : ''; 
		organization_options += '<option value="' + organization.id + '" ' + selected + '>' + _.escape(organization.attributes.name) + current + '</option>'; 
	}); 
	if(!is_org_found && board.attributes.organization_id != 0){
		display_options = true;
		organization_options += '<option value="' + board.attributes.organization_id + '" selected="selected" >' + _.escape(board.attributes.organization_name) + '(current)</option>'; 
	}
;
__p += ' \n<form class="normal js-save-board-visibility" name="BoardVisibilityForm">\n<div class="form-group select"><label for="inputListBoard">Organization</label><select name="organization_id" class="form-control cur" required>';
 if (display_options) {;
__p += '<option value="">Please select organization</option>' +
((__t = (organization_options )) == null ? '' : __t);
}else{;
__p += '<option value="">(none)</option>';
};
__p += '</select></div><div class="submit"><input type="submit" class="btn btn-primary" value="Save" ';
 if (!display_options) {;
__p += ' disabled';
};
__p += '></div>\n</form>';

}
return __p
};

this["JST"]["templates/board_sidebar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 
	var background_color = board.attributes.background_color; 
    var background_picture_url = board.attributes.background_picture_url; 
    var background_pattern_url = board.attributes.background_pattern_url; 
    var preview = ''; 
    if (!_.isEmpty(background_picture_url) && background_picture_url != 'NULL') { 
		background_picture_url = background_picture_url.replace("_XXXX.jpg", "_b.jpg");
    	preview = '<span style="background-image:url(' + background_picture_url + ');" class="background-box show well-lg"></span>'; 
     } else if (!_.isEmpty(background_pattern_url) && background_pattern_url != 'NULL') { 
		background_pattern_url = background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
     	preview = '<span style="background-image:url(' + background_pattern_url + ');" class="background-box show well-lg"></span>'; 
     } else if (!_.isEmpty(background_color) && background_color != 'NULL') { 
     	preview = '<span style="background-color:' + background_color + '" class=" background-box show well-lg"></span>'; 
     }
;
__p += '\n<li class="js-list-form"><a class="nav-list-item js-show-filters" href="#"><span class="icon-sm icon-filter icon-type"></span> Filter Cards</a></li>\n';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t';
 if(!_.isEmpty(role_links.where({slug: "view_archived_lists"})) || !_.isEmpty(role_links.where({slug: "view_archived_cards"}))){ ;
__p += '\n\t<li><a class="nav-list-item js-archived-items" href="#"><span class="icon-sm icon-archive icon-type"></span> Archived Items</a></li>\n\t';
 } ;
__p += '\n';
 } ;
__p += '\n';
if(!_.isUndefined(authuser.user)) {;
__p += '\n';
 if(!_.isEmpty(role_links.where({slug: "view_sync_calendar"}))){ ;
__p += '\n<li class="dropdown js-sync-google-dropdown inner-dropdown"><a href="#" class="js-syn-google-calendar" data-toggle="dropdown"><span class="icon-calendar"></span>Sync with Google Calendar</a>\n  <ul class="dropdown-menu arrow">\n\t<li class="js-dropdown-popup dropdown-popup">\n\t  <div class="col-xs-12 text-center clearfix">\n\t\t<span class="col-xs-10"><strong>URL</strong></span><a class="js-close-sub-popover pull-right" href="#"><i class="icon-remove"></i></a></span></h4>\t\t\t\t\t\t\n\t  </div>\n\t  <div class="col-xs-12 divider"></div>\n\t  <div class="col-xs-12">\n\t\t<form class="normal col-xs-12">\n\t\t  <div class="form-group">\n\t\t\t<input type="text" readonly="readonly" value="" class="form-control input-sm js-syn-calendar-response" id="js-select-google-sync-url">\n\t\t  </div>\n\t\t</form>\n\t  </div>\n\t</li>\n  </ul>\n</li>\n';
 } ;
__p += '\n<li class="divider"></li>\n';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n<li><a href="#" class="nav-list-item nav-list-sub-item js-change-background">Change Background</a></li>\n';
 };
__p += '\n';
if(!_.isUndefined(authuser.user) && !is_offline_data) {;
__p += '\n\t<li class="js-sync-google-dropdown inner-dropdown"><a data-toggle="dropdown" href="#" class="js-show-copy-board">Copy Board</a>\n\t</li>\n';
 }} ;
__p += '\n<li class="divider"></li>\n<li><a href="#" class="js-show-board-modal" data-toggle="modal" data-target="#modalListView">Show Attachments</a></li>\n';
 if(is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n<li><a href="#" class="js-additional-settings">Additional Settings</a></li>\n<li class="divider"></li>\n<li class="dropdown js-open-dropdown inner-dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Close Board</a>\n  <ul class="dropdown-menu arrow pull-right">\n\t<li class="js-dropdown-popup dropdown-popup">\n\t  <div class="clearfix text-center col-xs-12">\n\t\t<span class="col-xs-10"><strong>Close Board</strong></span><a class="js-close-sub-popover pull-right" href="#"><i class="icon-remove"></i></a>\t\t\t\t\t\t\n\t  </div>\n\t  <div class="col-xs-12 divider"></div>\n\t  <div class="col-xs-12">\n\t\t<form class="normal col-xs-12" name="BoardCloseForm" id="BoardCloseForm">\n\t\t  <input id="inputBoardClose" name="is_closed" type="hidden" value="true">\n\t\t  <p>You can reopen the board by clicking the "Boards" menu from the header, selecting "View Closed Boards", finding the board and clicking "Reopen".</p>\n\t\t  <div class="submit">\n\t\t\t<input type="submit" value="Close" id="submitBoardClose" class="btn btn-primary js-close-board">\n\t\t  </div>\n\t\t</form>\n\t  </div>\n\t</li>\n  </ul>\n</li>\n';
 } ;


}
return __p
};

this["JST"]["templates/board_simple_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board != null){ ;
__p += '\n<div class="panel">\n  ';
 if(!_.isEmpty(board.subscribers)){ var subscriber = board.subscribers.findWhere({ user_id: parseInt(authuser.user.id) }); } ;
__p += '\n  <div class="panel-body bg-warning">\n    <div class="clearfix">\n\t\t<h4 class="col-md-9 col-sm-8 col-xs-9 navbar-btn">\n\t\t\t<span class="show row navbar-btn">\n\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "view_board"}))){ ;
__p += '\n\t\t\t  <a href="#/board/' +
__e( board.id ) +
'" title="' +
__e( board.attributes.name ) +
'" class="htruncate btn-block">\n\t\t\t  ';
 } ;
__p += '\n\t\t\t  ';
 if(board.attributes.organization_id > 0 && board.attributes.organization_id != null){ 
					var logo_path = "img/default-organization.png"; 
					if (!_.isUndefined(board.attributes.organization_logo_url) && board.attributes.organization_logo_url != null && board.attributes.organization_logo_url != '') {
						logo_path = board.showImage('Organization', board.attributes.organization_id, 'small_thumb' );
					}
			  ;
__p += '\n\t\t\t\t\t<img src="' +
__e( logo_path ) +
'" title="' +
__e(board.attributes.organization_name) +
'" alt="[Image: Organization]" class="pull-left navbar-btn" width="16" height="16" /> &nbsp;\n\t\t\t  ';
 } ;
__p += '\n\t\t\t   ' +
__e( board.attributes.name) +
'\n\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "view_board"}))){ ;
__p += '\n\t\t\t  </a>\n\t\t\t  ';
 } ;
__p += '\n      \t\t</span>\n\t  \t</h4> \n\t\t';
 if(board.attributes.is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) {;
__p += '\n\t\t<span class="pull-right dropdown"><a href="#" class="js-board-visibility text-muted h5 show" data-toggle="dropdown">\n      ';
 if(board.attributes.board_visibility == 0) { ;
__p += '\n      <span title="Private" class="text-primary icon-lock col-lg-2"></span>\n      ';
 } else if(board.attributes.board_visibility == 1) { ;
__p += '\n      <span title="Organization" class="text-primary icon-group col-lg-2"></span>\n      ';
 } else if(board.attributes.board_visibility == 2) { ;
__p += '\n      <span title="Public" class="text-primary icon-circle col-lg-2"></span>\n      ';
 } ;
__p += '\n      </a>\n      <ul class="dropdown-menu arrow arrow-right">\n        <li class="js-visibility-popup js-dropdown-popup dropdown-popup">\n            <div class="clearfix text-center col-xs-12">\n\t\t\t  <a class="js-back-to-board-visibility hide pull-left" href="#"><i class="icon-caret-left"></i></a>\n              <span class="col-xs-10"><strong>Change Visibility</strong></span><a class="js-close-span-popover pull-right" href="#"><i class="icon-remove"></i></a>\n            </div>\n\t\t</li>\n\t\t<li class="col-xs-12 divider js-visibility-list"></li>\n      </ul>\n      </span>\n\t  ';
 } else {;
__p += '\n\t\t<span class="pull-right dropdown h5">\n\t\t';
 if(board.attributes.board_visibility == 0) { ;
__p += '\n\t\t  <span title="Private" class="text-primary icon-lock col-lg-2"></span>\n\t\t  ';
 } else if(board.attributes.board_visibility == 1) { ;
__p += '\n\t\t  <span title="Organization" class="text-primary icon-group col-lg-2"></span>\n\t\t  ';
 } else if(board.attributes.board_visibility == 2) { ;
__p += '\n\t\t  <span title="Public" class="text-primary icon-circle col-lg-2"></span>\n\t\t  ';
 } ;
__p += '\n\t\t</span>\n\t  ';
 } ;
__p += '\n      ';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n      ';
 if(!_.isUndefined(starred_boards) && starred_boards.map( Number ).indexOf(board.attributes.id) != -1){ ;
__p += '\n      <a title="Unstar" href="#" class="pull-right js-star-board h5" name="unstar"><i class="icon-star text-primary"></i></a>\n      ';
 } else {;
__p += '\n      <a title="Star" href="#" class="pull-right js-star-board h5" name="star"><i class="icon-star-empty"></i></a>\n      ';
 } ;
__p += '\n      ';
 } ;
__p += '\n    </div>\n    <div class="js-board-inner-view"></div>\n\t<ul class="list-unstyled chart-block">\n\t';
 
	var style = '';			
	if (board.attributes.background_picture_url) {
		var background_picture_url = board.attributes.background_picture_url.replace("_XXXX.jpg", "_n.jpg");
		style = 'background:url(' + background_picture_url + ') 25% 25%; background-size: cover';
	} else if (board.attributes.background_pattern_url) {
		var background_pattern_url = board.attributes.background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background: transparent url(' + background_pattern_url + ')  repeat scroll 0% 0%;';
	} else if (board.attributes.background_color){
		style = 'background:' + board.attributes.background_color;
	}
	;
__p += '\n\t\t<li class="list-group-item clearfix" style="' +
((__t = ( style )) == null ? '' : __t) +
'">\n\t\t\t';
 if(board.attributes.music_name != null){ ;
__p += '\n\t\t\t<div class="col-xs-push-0 pa well-sm board-music-bg"><i class="icon-music icon-light"></i></div>\n\t\t\t';
 } ;
__p += '\n\t\t\t<a class="show" href="#/board/' +
__e( board.id ) +
'">\n\t\t\t    <div id="doughnutChart" class="chart js-chart"></div>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n  </div>\n</div>\n';
 }else{ ;
__p += '\n<div class="alert alert-info">\n\t' +
((__t = ( message )) == null ? '' : __t) +
'\n</div>\n';
};


}
return __p
};

this["JST"]["templates/board_user_actions"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li>\n<div class="col-xs-12 clearfix text-center">\n\t<span class="pull-left" data-placement="bottom" title="' +
__e( user.attributes.username ) +
'" data-toggle="tooltip">\n\t';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
		var profile_picture_path = user.showImage('User', user.attributes.user_id, 'micro_thumb' );
	;
__p += '\n\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded">\n\t';
 } else {;
__p += '\n\t\t<i class="avatar avatar-color-194 img-rounded avatar-sm">' +
__e( user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t';
 } ;
__p += '</span>\n\t<span class="col-xs-8"><strong>' +
__e( user.attributes.username ) +
'</strong></span>\n\t\t<span class="">\n\t\t\t<a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t</span>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<ul class="list-unstyled">\n\t\t<li class="dropdown"> \n\t\t\t';
 if (is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) { ;
__p += '\n\t\t\t<a href="#" data-toggle="dropdown" class="dropdown-toggle ';
if(user.attributes.user_id != user.collection.board.attributes.user_id){;
__p += 'js-show-dropdown';
};
__p += '"> Change permissions (';
 if(user.attributes.is_admin == true || user.attributes.is_admin == 't'){ ;
__p += ' Owner ';
}else{;
__p += ' Member';
};
__p += ')</a>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right arrow arrow-right js-list-actions-response">\n\t\t\t\t<div class="clearfix text-center col-xs-12"> <a data-list-id="339" class="js-back-to-list-actions pull-left" href="#"><i class="icon-caret-left "></i></a><span class="col-xs-10"><strong>Change Permissions</strong></span><a href="#" class="js-close-popup pull-right"><i class="icon-remove "></i></a> </div>\n\t\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t\t<div class="col-xs-12">\n\t\t\t\t  <ul class="list-unstyled">\n\t\t\t\t\t<li> <a href="#" class="';
 if(user.attributes.is_admin == false || user.attributes.is_admin == 'f'){ ;
__p += 'js-edit-board-member-permission-to-admin';
}else{;
__p += 'js-no-action';
};
__p += '"> <span class="show text-primary">Owner ';
 if(user.attributes.is_admin == true || user.attributes.is_admin == 't'){ ;
__p += '<i class="icon-ok"></i>';
};
__p += '</span> <span class="text-muted">Can view and edit cards, remove members, and change settings for the board.</span> </a> </li>\n\t\t\t\t\t<li class="divider"></li>\n\t\t\t\t\t<li> <a href="#" class="';
 if(user.attributes.is_admin == true || user.attributes.is_admin == 't'){ ;
__p += 'js-edit-board-member-permission-to-normal';
}else{;
__p += 'js-no-action';
};
__p += '"><span class="show text-primary">Member ';
 if(user.attributes.is_admin == false || user.attributes.is_admin == 'f'){ ;
__p += '<i class="icon-ok"></i>';
};
__p += '</span> <span class="text-muted">Can view and edit cards. Can\'t change settings.</span></a> </li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t</ul>\n\t\t\t';
 } ;
__p += '\n\t\t</li>\n\t\t<li>\n\t\t\t<a href="#" title="View member\'s board activity" data-user-id="' +
__e( user.attributes.user_id ) +
'" class="panel js-view-user-activities">\n\t\t\t\t<span>View member\'s board activity</span>\n\t\t\t</a>\n\t\t</li>\n\t\t';
 if (is_admin || (!_.isUndefined(authuser.user) && authuser.user.role_id == 1)) { ;
__p += '\n\t\t\t<li><a href="#" title="';
if(parseInt(authuser.user.id) != user.attributes.user_id ){;
__p += 'Remove';
}else{;
__p += 'Leave';
};
__p += ' from board" class="';
if(user.attributes.user_id != user.collection.board.attributes.user_id){;
__p += 'js-show-confirm-delete-board-member';
};
__p += '">';
if(parseInt(authuser.user.id) != user.attributes.user_id ){;
__p += 'Remove';
}else{;
__p += 'Leave';
};
__p += ' from board</a></li>\n\t\t';
 } ;
__p += '\n\t\t\n\t</ul>\n</div>\n\n<li>';

}
return __p
};

this["JST"]["templates/board_user_activity"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Member Activities</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div><div class="col-xs-12 member-modal js-pre-scrollable vertical-scrollbar"><ul class="list-unstyled list-inline"><li>User activities......</li></ul></div>';

}
return __p
};

this["JST"]["templates/board_user_remove_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li>\n\t<div class="col-xs-12">\n\t\t<h4>Remove Member?\n\t\t\t<span class="pull-right">\n\t\t\t\t<a class="js-close-popover" href="#"><i class="icon-remove"></i></a>\n\t\t\t</span>\n\t\t</h4>\n\t\t<hr>\n\t</div>\n\t<div class="col-xs-12">\n\t\t<form class="normal" name="BoardUserForm" id="BoardUserForm">\n\t\t\t<div class="h5">Are you sure?</div>\n\t\t\t<div class="submit">\n\t\t\t\t<a class="js-delete-board-member" data-board_user_id="' +
__e( board_user.attributes.id ) +
'" href="#">\n\t\t\t\t Remove ' +
__e( board_user.attributes.username ) +
' from ' +
__e( board_user.attributes.board_name ) +
' Boards? The member will be removed from all cards on this board. \n\t\t\t</div>\n\t\t</form>\n\t</div>\n</li>\t';

}
return __p
};

this["JST"]["templates/board_users_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a title="' +
__e( user.attributes.username ) +
'" href="#" class="dropdown-toggle js-show-board-user-action pull-left" data-toggle="dropdown"> <span data-placement="bottom" title="' +
__e( user.attributes.username ) +
'" data-toggle="tooltip" class="col-xs-12 btn-block navbar-btn">\t\t\t\t\n\t';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
		var profile_picture_path = user.showImage('User', user.attributes.user_id, 'small_thumb' );
	;
__p += '\n\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded img-responsive avatar">\n\t';
 } else {;
__p += '\n\t\t<i class="avatar avatar-color-194 img-rounded">' +
__e( user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t';
 } ;
__p += '\n\t';
 if(is_admin && user.attributes.is_admin) { ;
__p += '\n\t\t<span class="name-block col-xs-1 label btn-xs col-xs-push-0">Owner</span>\n\t';
 } ;
__p += '\n</span></a>\n\t\t<ul class="dropdown-menu dropdown-menu-left arrow arrow-left">\n\t\t\t<li class="js-show-board-user-action-response js-dropdown-popup dropdown-popup">\n\t\t\t\t\n\t\t\t</li>\n\t\t</ul>';

}
return __p
};

this["JST"]["templates/board_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="col-xs-12"><input class="js-input-board-visibility" name="board_visibility" type="hidden" value="' +
__e( board.attributes.board_visibility ) +
'">\n<input class="js-input-board-organization-id" name="organization_id" type="hidden" value="' +
__e( board.attributes.organization_id ) +
'">\n<a href="#" name="private" class="btn-default show row small well-xs js-select-visibility"><span class="show text-primary col-xs-12 navbar-btn h5">Private\n  ';
 if(board.attributes.board_visibility == 0){ ;
__p += '\n  <i class="icon-check"></i>\n  ';
};
__p += '\n  </span><span class="col-xs-12 navbar-btn">This board is private. Only people added to the board can view and edit it.</span></a></li>\n  <li class="divider col-xs-12"></li>\n<li class="col-xs-12"><a href="#" name="org" class="show row small well-xs js-select-visibility disabled"><span class="show text-primary col-xs-12 navbar-btn h5">Organization\n  ';
 if(board.attributes.board_visibility == 1){ ;
__p += '\n  <i class="icon-check"></i>\n  ';
};
__p += '\n  </span> <span class="col-xs-12 navbar-btn">This board is visible to members of the organization. Only people added to the board can edit. <span class="error">The board must be added to an org to enable this.</span></span></a></li>\n  <li class="divider col-xs-12"></li>\n<li class="col-xs-12"><a href="#" name="public" class="show row small well-xs js-select-visibility"><span class="show text-primary col-xs-12 navbar-btn h5">Public\n  ';
 if(board.attributes.board_visibility == 2){ ;
__p += '\n  <i class="icon-check"></i>\n  ';
};
__p += '\n  </span> <span class="col-xs-12 navbar-btn">This board is public. It\'s visible to anyone with the link and will show up in search engines like Google. Only people added to the board can edit.</span></a></li>\n';

}
return __p
};

this["JST"]["templates/card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="panel-body">\n  ';
 if(!_.isEmpty(role_links.where({slug: "view_card_labels"}))){  ;
__p += '\n  <div class="clearfix js-card-label-section-' +
__e( card.attributes.id ) +
'">\n  ';

  	card.labels.each(function(label) {
            if (!_.isUndefined(label) && label.attributes.name !== "") { ;
__p += '\n\t\t\t<span class="cur"><i style="color:#' +
__e( converter.colorCode(''+label.attributes.name).substring(0, 6) ) +
';" data-toggle="tooltip" data-container="body" data-placement="top" data-original-title="' +
__e( label.attributes.name ) +
'" title="' +
__e( label.attributes.name ) +
'" class="' +
((__t = ( LABEL_ICON )) == null ? '' : __t) +
' cur"></i></span>\n               \n   ';
         }
        });;
__p += ' \n  \n  \n  </div>\n ';
  } ;
__p += ' \n  ';
 if(!_.isEmpty(card.attachments) && card.attachments.length > 0 && card.attachments.at(0).attributes.name.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)){ ;
__p += '\n\t  <div class="clearfix js-card-attachment-image navbar-btn ';
 if(!_.isEmpty(card.collection) && !card.list.collection.board.attributes.is_show_image_front_of_card){ ;
__p += ' hide ';
 } ;
__p += '">\n\t\t';

			var img_src = card.showImage('CardAttachment',  card.attachments.at(0).attributes.id, 'large_thumb' );
		;
__p += '\n\t\t<img class="img-responsive center-block" src="' +
((__t = ( img_src )) == null ? '' : __t) +
'"/>\n\t  </div>\n\t';
 } ;
__p += ' \n  <a href="#" title="' +
__e( card.attributes.name ) +
'">' +
__e( card.attributes.name ) +
'</a>\n  <ul class="list-unstyled list-inline text-muted clearfix">\n  \t';

		if(!_.isUndefined(authuser) && !_.isUndefined(authuser.user)){
			var cards_subscribers = card.cards_subscribers.where({
				is_subscribed: true,
				user_id: parseInt(authuser.user.id) 
			});
		}
	;
__p += '\n\t';
 if(!_.isUndefined(cards_subscribers) && !_.isEmpty(cards_subscribers)){ ;
__p += '\n\t\t<li><small><span class="icon-eye-open"></span></small></li>\n\t';
 } ;
__p += ' \n\t';
 if(card.card_voters.length > 0){ ;
__p += '\n\t<li><small title="' +
__e( card.card_voters.length ) +
' Votes"><span class="icon-thumbs-up"></span><span>' +
__e( card.card_voters.length ) +
'</span></small></li>\n\t';
 } ;
__p += '\n\t';
 
	if(card.attributes.comment_count > 0){ 
	;
__p += '\n\t<li><small title="' +
__e( card.attributes.comment_count ) +
' Comments" ><span class="icon-comment"></span><span>' +
__e( card.attributes.comment_count ) +
'</span></small></li>\n\t';
 } ;
__p += '\n\t';
 if(!_.isEmpty(card.attributes.description)){ ;
__p += '\n\t<li><small title="Description"><span class="icon-align-left"></span><span></span></small></li>\n\t';
 } ;
__p += '\n\t';
 if(card.attributes.checklist_item_count > 0){ ;
__p += '\n\t\t<li><small title="' +
__e( card.attributes.checklist_item_completed_count ) +
' checklist completed out of ' +
__e( card.attributes.checklist_item_count ) +
'">';
 if(card.attributes.checklist_item_completed_count == card.attributes.checklist_item_count) { ;
__p += '<div class="label label-success"> ';
 } ;
__p += '<span class="icon-list-ul"></span><span>' +
__e( card.attributes.checklist_item_completed_count ) +
'/' +
__e( card.attributes.checklist_item_count ) +
'</span>';
 if(card.attributes.checklist_item_completed_count == card.attributes.checklist_item_count) { ;
__p += '</div>';
 } ;
__p += '</small></li>\n\t';
 } ;
__p += ' \n\t';
 if(card.attributes.due_date > 0){ ;
__p += '\n\t\t<li><small title="Due Date"><span class="icon-time"></span><span>' +
__e( card.attributes.due_date ) +
'</span></small></li>\n\t';
 } ;
__p += ' \n\t';
 if(!_.isEmpty(card.attachments) && card.attachments.length > 0){ ;
__p += '\n\t<li>\n\t\t<small title="' +
__e( card.attachments.length ) +
' Attachments">\n\t\t\t<span class="icon-paper-clip"></span>\n\t\t\t<span>\n\t\t\t' +
__e( card.attachments.length ) +
'\n\t\t\t</span>\n\t\t</small>\n\t</li>\n\t';
 } ;
__p += '  \n\t';
 if(!_.isUndefined(card.id) && (_.isUndefined(card.attributes.is_offline) || card.attributes.is_offline == false)){ ;
__p += '\n\t<li class="pull-right card-id"><strong>#' +
__e( card.id ) +
'</strong></li>\n\t';
};
__p += '\n\t';
 if(!_.isEmpty(card.attributes.due_date) && card.attributes.due_date != 'NULL'){
		var date_time = card.attributes.due_date.split('T');
		date_time = date_time[0].split(' ');
	;
__p += '\n\t<li><small title="Due Date"><span class="label label-default">' +
((__t = ( dateFormat(date_time[0], 'mediumDate')  )) == null ? '' : __t) +
'</span></small></li>\n\t';
 } ;
__p += '\n\t</ul>\n\t<div class="clearfix pull-right">\n\t\t<ul class="list-unstyled list-inline text-muted clearfix">\n\t\t';

			card.users.each(function(card_user) {
				if (!_.isUndefined(card_user)) {
		;
__p += '\n\t\t\t\t\t<li class="pull-right card-id js-tooltip" data-placement="bottom" title="' +
__e(card_user.attributes.username ) +
'" data-toggle="tooltip">\n\t\t\t\t\t\t';
 if(!_.isEmpty(card_user.attributes.profile_picture_path)) { 
							var profile_picture_path = card.showImage('User', card_user.attributes.user_id, 'small_thumb' );
						;
__p += '\n\t\t\t\t\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(card_user.attributes.username ) +
']" title="' +
__e(card_user.attributes.username ) +
'" class="img-rounded img-responsive avatar">\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
__e( card_user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t</li>\n\t\t';
		
				}
			});
		;
__p += '\n\t\t</ul>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/card_actions"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="text-center"><strong>Options</strong></li><li class="divider"></li>';
 if(!_.isEmpty(role_links.where({slug: "add_card_user"}))){ ;
__p += '<li><a class="js-show-add-member-form" title="Members" href="#">Members</a></li>';
 } ;

 if(!_.isEmpty(role_links.where({slug: "add_labels"}))){ ;
__p += '<li><a class="panel-heading show dropdown-toggle js-show-card-label-form" role="button" data-toggle="dropdown" title="Labels" href="#">Labels</a></li>';
 } ;
__p += '<li><a class="panel-heading show dropdown-toggle js-show-card-position-form" role="button" data-toggle="dropdown" title="Position" href="#">Position</a></li>';

}
return __p
};

this["JST"]["templates/card_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form method="post" role="form" class="form-horizontal js-cardAddForm" name="cardAddForm">\n\t<input type="hidden" name="board_id" value="' +
__e( model.attributes.board_id ) +
'">\n\t<input type="hidden" name="list_id" class="js-card-add-list" value="' +
__e( model.attributes.list_id ) +
'">\n\t<input type="hidden" name="user_ids" class="js-card-user-ids" value="">\n\t<input type="hidden" name="card_labels" class="js-card-add-labels" value="">\n\t<input type="hidden" name="position" class="js-card-add-position" value="">\n\t<div class="form-group">\n\t\t<textarea placeholder="Add a Card" rows="3" class="form-control" name="name" required>' +
__e( name ) +
'</textarea>\n\t</div>\n\t<div class="row">\n\t\t<div class="pull-left">\n\t\t\t<input type="submit" value="Add" class="btn btn-primary js-cardAddForm-btn">\n\t\t</div>\n\t\t<ul class="list-unstyled pull-right">\n\t\t\t<li class="pull-left">\n\t\t\t\t<a title="remove" href="#" class="btn btn-link js-cancel-card-add"><i class="icon-remove text-muted"></i></a>\n\t\t\t</li>\n\t\t\t<li class="pull-right dropdown inner-dropdown">\n\t\t\t\t<a title="Options" data-toggle="dropdown" class="btn btn-link btn-block dropdown-toggle js-show-card-action-list" href="#"><i class="icon-cog text-muted"></i></a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</form>\n';

}
return __p
};

this["JST"]["templates/card_attachment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<a target="_blank" href="' +
((__t = ( attachment.downloadLink('download', attachment.attributes.id) )) == null ? '' : __t) +
'" class="pull-left navbar-btn img-thumbnail">';
 if(attachment.attributes.name.toLowerCase().match(/\.(jpg|jpeg|png|gif)$/)){ 
var picture_path = attachment.showImage('CardAttachment', attachment.attributes.id, 'large_thumb' );
;
__p += '\n<img src="' +
((__t = ( picture_path )) == null ? '' : __t) +
'">';
 } else{  var extension = attachment.attributes.name.split('.'); ;
__p += '<p class="thumb-img">';
 if(!_.isUndefined(extension) && extension.length > 1) { ;
__p +=
__e( extension[extension.length - 1].toUpperCase() );
 };
__p += '</p>';
 };
__p += '</a>\n\n<div class="clearfix btn-block col-xs-12">\n<a target="_blank" href="' +
((__t = ( attachment.downloadLink('download', attachment.attributes.id) )) == null ? '' : __t) +
'" title="' +
__e( attachment.attributes.name ) +
'"><span class="show htruncate col-xs-11 nav">' +
__e( attachment.attributes.name ) +
'</span><span class="show btn-block col-xs-12">Added <small class="text-muted"><abbr class="timeago" title="' +
__e( attachment.attributes.created ) +
'">' +
__e( attachment.attributes.created ) +
'</abbr></small></span></a>\n';
if(!_.isUndefined(authuser.user)) {;
__p += '\n\t<div class="btn-toolbar navbar-btn">\n\t\t<div class="btn-group btn-group-xs navbar-btn">\n\t\t\t<div class="btn btn-primary">\n\t\t\t';
 
				var download_link = attachment.downloadLink('download', attachment.attributes.id);
			;
__p += '\n\t\t\t\t<a target="_blank" href="' +
((__t = ( download_link )) == null ? '' : __t) +
'" title="Download">\n\t\t\t\t<i class="icon-arrow-down cur icon-light"></i></a>\n\t\t\t</div>\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "remove_card_attachment"}))){ ;
__p += ' \n\t\t\t\t\t<div class="dropdown pull-left">\n\t\t\t\t\t\t<a href="#" title="Delete" class="btn btn-default btn-xs js-show-confirm-delete-attachment dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<i class="icon-remove cur"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class="dropdown-menu arrow list-unstyled">\n\t\t\t\t\t\t\t<li class="js-dropdown-popup js-attachment-confirm-respons-' +
__e( attachment.id ) +
'"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t</div>\n\t</div>\n';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["templates/card_checklist"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="list-group-item-heading clearfix js-checklist-head">\n\t<h3 class="pull-left col-xs-9">\n\t\t<span class="pull-left row"><i class="icon-list text-muted lead"></i></span>\n\t\t<span class="';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: 'edit_checklist'}))){ ;
__p += 'js-show-checklist-edit-form';
 } ;
__p += ' col-sm-12">\n\t\t\t<a href="#" title="' +
__e( checklist.get('name') ) +
'" class="';
 if(_.isUndefined(authuser.user)){;
__p += ' js-no-action';
};
__p += '">' +
__e( checklist.get('name') ) +
'</a>\n\t\t</span>\n\t</h3>\n\t';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "delete_checklist"}))){ ;
__p += '\n\t<div class="pull-right dropdown h4">\n\t\t<a class="btn btn-link dropdown-toggle js-show-checklist-actions" role="button" data-toggle="dropdown" title="Checklist" href="#">\n\t\t\t<span><i class="icon-chevron-sign-down text-primary"></i></span>\n\t\t</a>\n\t\t<ul class="dropdown-menu arrow arrow-right" id="js-checklist-confirm-response-' +
__e( checklist.get('id') ) +
'">\n\t\t\t<li class="clearfix">\n\t\t\t\t<div class="clearfix text-center col-xs-12">\n\t\t\t\t\t<span class="col-xs-10"><strong>Checklist</strong></span>\n\t\t\t\t\t<a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class="clearfix"><div class="col-xs-12 divider"></div></li>\n\t\t\t<li class="clearfix" id="js-checklist-actions-response-' +
__e( checklist.get('id') ) +
'"></li>\n\t\t</ul>\n\t</div>\n\t';
 } ;
__p += '\n</div>\n<div class="list-group-item-text clearfix">\n';
 
	var percentage = ((parseInt(checklist.get('checklist_item_completed_count')) / parseInt(checklist.get('checklist_item_count'))) * 100);
 ;
__p += '\n ';
 
 	if(isNaN(percentage)){ 
		percentage_val = 0;
	} else {
		percentage_val = Math.round(percentage, 2);
	}
 ;
__p += '\n <div class="clearfix">\n \t<span class="pull-left" id="js-checklist-progress-percent-' +
__e( checklist.get('id') ) +
'">\n\t\t' +
((__t = ( percentage_val)) == null ? '' : __t) +
'% &nbsp;</span><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" id="js-checklist-progress-bar-' +
__e( checklist.get('id') ) +
'" style="width:' +
((__t = ( Math.round(percentage, 2) )) == null ? '' : __t) +
'%"><span class="sr-only">' +
((__t = ( Math.round(percentage, 2) )) == null ? '' : __t) +
'%</span></div></div></div> <div  id="js-checklist-items-' +
__e( checklist.get('id') ) +
'" class="js-checklist-items-sorting checklist-items-sorting" data-checklist_id="' +
__e( checklist.get('id') ) +
'"> </div></div>';

}
return __p
};

this["JST"]["templates/card_checklist_item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group list-group-item-text" data-checklist-id="' +
__e( checklist_item.get('id') ) +
'">\n\t<div class="checkbox list-group-item-text">\n\t\t<input id="checklist' +
__e( checklist_item.get('id') ) +
'" type="checkbox" class="hide ';
 if(!_.isUndefined(authuser.user)){ if(checklist_item.get('is_completed') == 'true' || checklist_item.get('is_completed') == true || checklist_item.get('is_completed') == 't'){ ;
__p += ' js-markas-incomplete ';
 } else{;
__p += ' js-markas-completed ';
 } } ;
__p += '" ';
 if(checklist_item.get('is_completed') == 'true' || checklist_item.get('is_completed') == true || checklist_item.get('is_completed') == 't'){ ;
__p += 'checked';
 } ;
__p += ' ';
 if(_.isUndefined(authuser.user)){;
__p += ' disabled';
};
__p += ' >\n\t\t<label for="checklist' +
__e( checklist_item.get('id') ) +
'" class="pull-left js-checklist-item-head">\n\t\t</label>\n\t\t<div class="col-xs-11 row">\n\t\t\t<a href="#" class="row pull-left ';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: 'edit_checklist_item'}))){ ;
__p += 'js-show-item-edit-form';
 }else{ ;
__p += 'js-no-action';
};
__p += '  ';
 if(checklist_item.get('is_completed') == 'true' || checklist_item.get('is_completed') == true || checklist_item.get('is_completed') == 't'){ ;
__p += ' strike-through-text ';
 } ;
__p += '" >' +
__e( checklist_item.get('name') ) +
'</a>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/card_copy"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li><div class="clearfix text-center col-xs-12"><a data-list-id="95" class="js-back-to-card-actions pull-left" href="#"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Search for Card to Copy...</strong></span><a href="#" class="js-close-popup pull-right"><i class="icon-remove"></i></a></div></li><li class="col-xs-12 divider"></li><li><div class="col-xs-12"><div class="form-group"><input type="text" placeholder="Search for a card to copy" class="js-card-add-search form-control input-sm"></div><div class="js-card-add-search-response"><ul class="list-unstyled js-card-add-search-response"></ul></div></div></li>';

}
return __p
};

this["JST"]["templates/card_duedate_from"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 var date = ''; var time = ''; if (card.attributes.due_date !== null && card.attributes.due_date !== 'NULL') { var date_time = card.attributes.due_date.split('T'); date = date_time[0]; time = date_time[1]; } ;
__p += '<div class="form-group"><div class="col-xs-6"><label>Date</label><input type="text" class="form-control input-sm js-card-duedate-edit-' +
((__t = (card.attributes.id)) == null ? '' : __t) +
'"  name="due_date" data-format="yyyy-MM-dd" value="' +
((__t = ( date)) == null ? '' : __t) +
'" required></div><div class="col-xs-6"><label>Time</label><input type="text" class="form-control input-sm js-card-duetime-edit-' +
((__t = (card.attributes.id)) == null ? '' : __t) +
'"  name="due_time" data-format="hh:mm:ss" value="' +
((__t = ( time)) == null ? '' : __t) +
'" required></div></div><div class="form-group"><div class="col-xs-6"><label for="save" class="sr-only">Save</label><input type="submit" value="Save" id="save" class="btn btn-primary" id="submitCardDueDateEditForm"></div>';
 if(!_.isEmpty(card.attributes.due_date) && card.attributes.due_date != 'NULL') { ;
__p += '<div class="col-xs-6"><label for="remove" class="sr-only">Remove</label><input type="reset" value="Remove" class="btn btn-default js-remove-due-date"></div>';
 } ;
__p += '</div>';

}
return __p
};

this["JST"]["templates/card_label"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span style="background:#' +
((__t = ( background )) == null ? '' : __t) +
';color:#ffffff" class="btn">' +
__e( label.get('name') ) +
'</span>';

}
return __p
};

this["JST"]["templates/card_label_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<span class="col-xs-10">\n\t\t<strong>Labels</strong>\n\t</span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div><div class="col-xs-12"><form name="cardLabelAddForm" class="js-card-label-add-form"><div class="form-group"><input type="text" class="inputCardLabel" name="name" value="' +
__e(labels ) +
'" /><input type="hidden" class="inputHiddenCardLabel" name="hiddenName" value="' +
__e(labels ) +
'" /></div><div class="submit"><input type="submit" value="Save" class="btn btn-primary pull-left"></div></form></div>';

}
return __p
};

this["JST"]["templates/card_labels_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12"><a class="js-back-to-card-actions pull-left" href="#"><i class="icon-caret-left no-pad"></i></a><span class="col-xs-10"><strong>Labels</strong></span><a class="js-close-sub-popover pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div><div class="col-xs-12"><div class=""><input type="text" class="js-card-label" name="labels"></div></div>';

}
return __p
};

this["JST"]["templates/card_list_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(card != null && !_.isEmpty(card)){ ;
__p += '\n<td>\n <ul class="unstyled  hide js-card-labels">\n</ul>\n<ul class="unstyled  js-card-users hide">\n</ul>\n<ul class="unstyled  js-card-due hide">\n <li></li>\n</ul>\n<div id="js-card-' +
__e( card.attributes.id ) +
'" class="panel cur">\n\t<div class="panel-body"> \n\t\t<ul class="list-inline navbar-btn clearfix">\n\t\t  <li class="col-md-1 col-xs-2"><span class="card-id">#' +
__e( card.attributes.id ) +
'</span></li>\n\t\t  <li class="col-md-4 col-xs-3">' +
__e( card.attributes.name ) +
'</li>\n\t\t  <li class="col-md-4 col-xs-3">' +
__e( card.list_name ) +
'</li>\n\t\t  <li class="col-md-3 col-xs-4">\n\t\t\t<ul class="list-inline text-muted clearfix">\n\t\t\t\t  ';
 
					if(!_.isUndefined(authuser) && !_.isUndefined(authuser.user)){
					var cards_subscribers = card.cards_subscribers.where({ is_subscribed: true, user_id: parseInt(authuser.user.id) }); 
					}
					if(!_.isUndefined(cards_subscribers) && cards_subscribers > 0){ ;
__p += '\n\t\t\t\t\t<li><small><span class="icon-eye-open"></span></small></li>';
 } ;

 if(card.attributes.card_voter_count > 0){ ;
__p += '<li title="' +
__e( card.attributes.card_voter_count ) +
' Votes" data-placement="bottom" data-toggle="tooltip"><small><span class="icon-thumbs-up"></span><span>' +
__e( card.attributes.card_voter_count ) +
'votes</span></small></li>';
 } ;

 if(card.attributes.description !== "" && card.attributes.description !== null ){ ;
__p += '<li title="Description" data-placement="bottom" data-toggle="tooltip"><small><span class="icon-align-left"></span></small></li>';
 } ;

 if(card.attributes.comment_count > 0){ ;
__p += '<li title="' +
__e( card.attributes.comment_count ) +
' comments" data-placement="bottom" data-toggle="tooltip"><small><span class="icon-comment"></span><span>' +
__e( card.attributes.comment_count ) +
'</span></small></li>';
 } ;

 if(card.attributes.checklist_item_count > 0){ ;
__p += '<li title="' +
__e( card.attributes.checklist_item_completed_count ) +
' checklist completed out of ' +
__e( card.attributes.checklist_item_count ) +
'" data-placement="bottom" data-toggle="tooltip"><small>';
 if(card.attributes.checklist_item_completed_count == card.attributes.checklist_item_count) { ;
__p += '<div class="label label-success"> ';
 } ;
__p += '<span class="icon-list-ul"></span><span>' +
__e( card.attributes.checklist_item_completed_count ) +
'/' +
__e( card.attributes.checklist_item_count ) +
'</span>';
 if(card.attributes.checklist_item_completed_count == card.attributes.checklist_item_count) { ;
__p += '</div>';
 } ;
__p += '</small></li>';
 } ;

 if(card.attributes.due_date > 0){ ;
__p += '<li title="Due Date" data-placement="bottom" data-toggle="tooltip"><small><span class="icon-time"></span><span>' +
__e( card.attributes.due_date ) +
'</span></small></li>';
 } ;

 if(!_.isEmpty(card.attachments) && card.attachments.length > 0){ ;
__p += '<li title="' +
__e( card.attachments.length ) +
' Attachments" data-placement="bottom" data-toggle="tooltip"><small><span class="icon-paper-clip"></span> <span>' +
__e( card.attachments.length ) +
'</span></small></li>';
 } ;

 if(!_.isEmpty(card.attributes.due_date) && card.attributes.due_date != 'NULL'){ ;
__p += '<li title="Due Date" data-placement="bottom" data-toggle="tooltip"><small><span class="label label-default">\n\t\t\t\t\t';
 var n = new Date(card.attributes.due_date).toString(); ;
__p += '\n\t\t\t\t\t' +
((__t = ( dateFormat(n, 'mediumDate')  )) == null ? '' : __t) +
'</span></small></li>';
 } ;
__p += '\n\t\t\t</ul>\n\t\t  </li>\n\t\t</ul>\n\t</div>\n</div>\n</td>\n';
 } else{ ;
__p += '<td colspan="4"  class="text-center">No cards available.</td>';
 } ;


}
return __p
};

this["JST"]["templates/card_member_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="clearfix text-center col-xs-12">\n\t<div class="clearfix">\n\t\t<a class="js-back-to-card-actions pull-left" href="#"><i class="icon-caret-left"></i></a>\n\t\t<span class="col-xs-10"><strong>Members</strong></span>\n\t\t<a class="js-close-popup pull-right" href="#"><i class="icon-remove"></i></a>\n\t</div>\n</li>\n<li class="col-xs-12 divider"></li>\n\t\t';
 if (!_.isEmpty(card.board_users.models)) { 
			card.board_users.each(function(board_user) {
				 var added_user = card.users.findWhere({ user_id: board_user.get('user_id') }); 
				 if (_.isEmpty(added_user)) { ;
__p += '\n\t\t\t\t \t<li>\n\t\t\t\t\t\t<a href="#" class="highlight-icon js-add-card-member" data-user-id="' +
__e( board_user.get('user_id') ) +
'" data-user-name="' +
__e(  board_user.get('username') ) +
'" data-user-initial="' +
__e(board_user.get('initials') ) +
'" data-user-profile-picture-path="' +
((__t = (board_user.get('profile_picture_path'))) == null ? '' : __t) +
'">\t\t\t\t\n\t\t\t\t\t\t';
 if(!_.isEmpty(board_user.attributes.profile_picture_path)) { 
							var profile_picture_path = board_user.showImage('User', board_user.attributes.id, 'micro_thumb' );
						;
__p += '\n\t\t\t\t\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(board_user.attributes.username ) +
']" title="' +
__e(board_user.attributes.username ) +
'" class="img-rounded img-responsive avatar  avatar-sm">\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( board_user.attributes.initials ) +
'</i>\t\t\t\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t' +
__e( board_user.get('username') ) +
'</a>\n\t\t\t\t\t</li>\n\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="#" class="highlight-icon js-remove-card-member" data-id="' +
__e(  added_user.id ) +
'"><i class="avatar avatar-color-194 img-rounded" title="' +
__e(  board_user.get('username') ) +
'">' +
__e(board_user.get('initials') ) +
'\n\t\t\t\t\t\t';
 if(!_.isEmpty(board_user.attributes.profile_picture_path)) { 
							var profile_picture_path = board_user.showImage('User', board_user.attributes.id, 'micro_thumb' );
						;
__p += '\n\t\t\t\t\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(board_user.attributes.username ) +
']" title="' +
__e(board_user.attributes.username ) +
'" class="img-rounded img-responsive avatar  avatar-sm">\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( board_user.attributes.initials ) +
'</i>\t\t\t\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t' +
__e(board_user.get('username') ) +
'</i></a> <i class="icon-ok"></i></li>\n\t\t\t\t\t';
 } 
			}); 
		}else{ ;
__p += '\n\t\t\t<li>No members available.</li>\n\t\t';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/card_positions_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


var content_list = '<div class="navbar-btn clearfix"><select name="selected_list_id" class="js-change-card-position form-control input-sm cur">';
var content_position = '<div class="navbar-btn"><select name="card_position" class="js-position form-control col-xs-12 input-sm cur">';
var filtered_lists = card.list.collection.board.lists.where({
	is_archived: false
});
_.each(filtered_lists, function(list) {
	if (card.attributes.list_id == list.id) {
		content_list += '<option value="' + list.id + '" selected="selected">' + _.escape(list.attributes.name) + '(current)</option>';
		var filtered_cards_count = card.list.collection.board.cards.where({
			list_id: list.id,
			is_archived: false
		}).length;
		var current_position = filtered_cards_count + 1;

		for(var i = 1; i <= filtered_cards_count + 1; i++){
			if (card.attributes.list_id == list.attributes.id && i == current_position) {
				content_position += '<option value="' + i + '" selected="selected">' + i + '(current)</option>';
			} else {
				content_position += '<option value="' + i + '">' + i+ '</option>';
			}
		}
		if (card.attributes.list_id != list.attributes.id) {
			var next_position = filtered_cards_count + 1;
			content_position += '<option value="' + next_position + '">' + next_position+ '</option>';
		}
		
	} else {
		content_list += '<option value="' + list.id + '">' + _.escape(list.attributes.name) + '</option>';
	}

});
content_list += '</select></div>';
content_position += '</select></div>';
var content = content_list + content_position;
;
__p += '\n\n<div class="clearfix text-center col-xs-12">\t\n\t\t<a href="#" class="js-back-to-card-actions pull-left" ><i class="icon-caret-left  no-pad"></i></a> <span class="col-xs-10"><strong> Position </strong></span><a href="#" class="js-close-sub-popover pull-right"><i class="icon-remove "></i></a>\t\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t' +
((__t = ( content )) == null ? '' : __t) +
'\n\n</div>\n\n';

}
return __p
};

this["JST"]["templates/card_search_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
__e( card.attributes.name );

}
return __p
};

this["JST"]["templates/card_search_users_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	if(user != null){	
;
__p += '\n\t<a title="' +
__e( user.attributes.username ) +
'" href="#" class="';
if(!_.isUndefined(user.attributes.is_existing_user) || is_added_user){ ;
__p += 'js-remove-card-member';
} else{ ;
__p += 'js-add-card-member';
};
__p += '" ';
if(!_.isUndefined(user.attributes.is_existing_user) || is_added_user){ ;
__p += ' data-card-user-id="' +
__e(added_user.id );
};
__p += '" data-user-name="' +
__e( user.attributes.username ) +
'" data-user-initial="' +
__e(user.attributes.initials ) +
'" data-user-profile-picture-path="' +
((__t = (user.attributes.profile_picture_path)) == null ? '' : __t) +
'" data-user-id="';
 if (!_.isUndefined(user.attributes.user_id)) { ;
__p +=
__e( user.attributes.user_id );
}else{;
__p +=
__e( user.attributes.id );
};
__p += '">\n\t\t<span>\n\t\t\t';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
				var user_id = (!_.isUndefined(user.attributes.user_id))? user.attributes.user_id:user.attributes.id ;
				var profile_picture_path = user.showImage('User', user_id, 'micro_thumb' );
			;
__p += '\n\t\t\t\t<img src="' +
((__t = ( profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded img-responsive avatar avatar-sm">\n\t\t\t';
 } else {;
__p += '\n\t\t\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e(user.attributes.initials ) +
'</i>\n\t\t\t';
 } ;
__p += '\n\t\t</span> <span>' +
__e( user.attributes.username ) +
'</span>\n\t';
 if(!_.isUndefined(user.attributes.is_existing_user) || is_added_user){ ;
__p += '<i class="icon-ok"></i>';
};
__p += '</a>\n';
 } else{ ;
__p += '\n\t<div class="col-xs-12">No users available.</div>\n';
 } ;


}
return __p
};

this["JST"]["templates/card_voters_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li>\t\t\n\t<div class="clearfix text-center col-xs-12">\n\t\t<span class="col-xs-10"><strong>Voters</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a>\n\t</div>\n</li>\n<li class="col-xs-12 divider"></li>\n';

	if (!_.isEmpty(card.card_voters.models)){
	card.card_voters.each(function(voter) {            
	;
__p += '\n\t\t<li class="col-xs-12"><a class="js-no-action" data-placement="bottom" data-toggle="tooltip" title="' +
__e( voter.attributes.username ) +
'" href="#"> \n\t\t<span>\n\t\t\t';
 if(!_.isEmpty(voter.attributes.profile_picture_path)) { 
				var profile_picture_path = card.showImage('User', voter.attributes.user_id, 'micro_thumb' );
			;
__p += '\n\t\t\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(voter.attributes.username ) +
']" title="' +
__e(voter.attributes.username ) +
'" class="img-rounded">\n\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( voter.attributes.initials ) +
'</i>\t\t\t\n\t\t\t';
 } ;
__p += '\n\t\t</span>\n\t\t<span>' +
__e( voter.attributes.username ) +
'</span></a></li>\n   ';
 });
   }else{ ;
__p += '\n\t<li class="col-xs-12">No voters available.</i>\n   ';
 }  ;
__p += '\n';

}
return __p
};

this["JST"]["templates/change_password"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">\n<div class="panel panel-default">\n\t<div class="panel-heading lead">Change Password</div>\n\t<div class="panel-body well-lg">\n\t\t<form class="form-horizontal col-xs-12" name="UserChangePasswordForm" id="UserChangePasswordForm">\n\t\t\t\t<div class="form-group input password required">\n\t\t\t\t\t<label class="sr-only control-label" for="inputOldPassword">Old Password</label>\n\t\t\t\t\t<input type="password" class="form-control" placeholder="Old Password" id="inputOldPassword" name="old_password" required>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group input password required">\n\t\t\t\t\t<label class="sr-only control-label" for="inputPassword">Enter a new Password</label>\n\t\t\t\t\t<input type="password" class="form-control" placeholder="Enter a new Password" id="inputPassword" name="password" required>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group input cpassword required">\n\t\t\t\t\t<label class="sr-only control-label" for="inputConfirmPassword">Confirm Password</label>\n\t\t\t\t\t<input type="password" class="form-control" placeholder="Confirm Password" id="inputConfirmPassword" name="confirm_password" required>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label class="sr-only control-label" for="submit2">Change Password</label>\n\t\t\t\t\t<input type="submit" class="btn btn-primary col-xs-12" value="Change Password" id="submitChangePassword" >\n\t\t\t\t</div>\n\t\t</form>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/chat"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Coming soon.....</h2> ';

}
return __p
};

this["JST"]["templates/checklist_actions"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Delete This Checklist';

}
return __p
};

this["JST"]["templates/checklist_add_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<label for="inputListName">Title</label>\n\t<input id="inputListName" type="text" placeholder="Title" autocomplete="off" class="form-control input-sm" name="name" value="Checklist" required>\n</div>\n<div class="form-group">\n\t<label for="copy-items">Copy Items From</label>\n\t<input type="hidden" name="board_id" value="' +
__e( card.attributes.board_id ) +
'" />\n\t<input type="hidden" name="list_id" value="' +
__e( card.attributes.list_id ) +
'" />\n\t<input type="hidden" name="card_id" value="' +
__e( card.id ) +
'" />\n\t<select  name="checklist_id" id="inputchecklist" class="form-control input-sm cur">\n\t\t<option value="0">Please Select</option>\n\t\t';

        var prev_group_id = 0;
		var content = '';
        card.checklists.each(function(checklist_list) {
            if (prev_group_id != checklist_list.attributes.id) {
                prev_group_id = checklist_list.attributes.id;
                content += '<optgroup label="' + _.escape(checklist_list.attributes.name) + '">';
            }
            content += '<option value="' + checklist_list.attributes.id + '">' + _.escape(checklist_list.attributes.name) + ' (' + checklist_list.checklist_items.length + ' items)</option>';
            if (prev_group_id !== 0 && prev_group_id != checklist_list.attributes.id) {
                content += '</optgroup>';
            }
        });
		;
__p += '\n        ' +
((__t = ( content)) == null ? '' : __t) +
'\n\t</select>\n</div>\n<div class="form-group">\n\t<label for="submit" class="sr-only col-sm-4 control-label">submit</label>\n\t<input type="submit" name="Save" class="btn btn-primary" value="Add">\n</div>';

}
return __p
};

this["JST"]["templates/checklist_delete_confirm_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<span class="col-xs-10"><strong>Delete Checklist?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12" id="js-checklist-actions-response-' +
((__t = ( checklist.get('id') )) == null ? '' : __t) +
'">\n\t<p>Deleting a checklist is permanent and there is no way to get it back.</p>\n\t<a class="js-delete-checklist btn  btn-primary" title="Delete Checklist">Delete</a>\n</div>';

}
return __p
};

this["JST"]["templates/checklist_edit_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\n\t<label for="inputListName" class="col-sm-4 control-label hide">Name</label>\n\t<div class="col-sm-10">\n\t\t<textarea name="name" class="form-control">' +
__e( checklist.get('name')) +
'</textarea>\n\t</div>\n</div>\n<div class="form-group">\n\t<div class="col-sm-8">\n\t\t<input type="submit" value="Save" class="btn btn-primary"/>\n\t\t<a class="js-hide-checklist-edit-form"><i class="icon-remove btn btn-link"></i></a>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/checklist_item_actions"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<span class="col-xs-10"><strong>Options</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove "></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<ul class="list-unstyled" id="js-show-member-form-response-\'' +
__e( checklist_item.id) +
'\'">\n\t\t<li><a href="#" class="js-show-mention-member-form" title="Mention Member">Mention Member</a></li>\n\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/checklist_item_add_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group required clearfix">\n\t<label for="inputItemName" class="sr-only">Name</label>\n\t<div class="clearfix">\n\t\t<textarea name="name" class="form-control" required></textarea>\n\t</div>\n</div>\n<div class="submit">\n\t<input type="submit" name="Save" class="btn btn-primary" value="Add">\n\t<i class="icon-remove js-hide-checklist-item-add-form btn btn-link cur" title="Cancel"></i>\n\t<div class=" pull-right dropdown">\n\t\t\t<a title="Item Options" class="dropdown-toggle js-show-item-options btn btn-link" data-toggle="dropdown" href="#"><i class="icon-chevron-sign-down"></i></a>\n\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t<li class="js-dropdown-popup dropdown-popup" id="js-item-add-option-response-' +
__e(checklist.id ) +
'"></li>\n\t\t\t</ul>\n\t\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/checklist_item_add_link"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="js-show-checklist-item-add-form js-add-item-view" href="#">Add Item</a>\n<div class="js-checklist-item-add-form-view">\n\n</div>';

}
return __p
};

this["JST"]["templates/checklist_item_delete_confirm_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<a href="#" class="js-back-to-list-actions pull-left"><i class="icon-caret-left "></i></a><span class="col-xs-10"><strong>Delete Checklist?</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove "></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<p>Deleting a item is permanent and there is no way to get it back. </p>\n\t<a class="js-delete-item btn  btn-primary" title="Delete Checklist">Delete</a>\n</div>';

}
return __p
};

this["JST"]["templates/checklist_item_edit_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group required">\n\t<label for="inputitemName" class="hide">Name</label>\n\t<textarea rows="4" name="name" class="form-control">' +
__e(checklist_item.get('name') ) +
'</textarea>\n</div>\n<div class="form-group">\n\t<div class="col-xs-12 h4 btn-block clearfix">\n\t\t<ul class="clearfix list-unstyled">\n\t\t\t<li class="pull-left">\n\t\t\t\t<div class="submit">\n\t\t\t\t\t<input type="submit" value="Save" class="btn btn-primary"/>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class="pull-left">\n\t\t\t\t<a class="js-hide-item-edit-form"><i class="icon-remove btn btn-link show"></i></a>\n\t\t\t</li>\n\t\t\t<li class="pull-right">\n\t\t\t\t<ul class="list-unstyled">\n\t\t\t\t\t';
 if (!_.isEmpty(role_links.where({slug: "delete_checklist_item"}))) { ;
__p += '\n\t\t\t\t\t<li class="pull-right dropdown">\n\t\t\t\t\t\t<a title="Delete" class="dropdown-toggle js-show-confirm-item-delete btn btn-link btn-sm" data-toggle="dropdown" href="#"><strong>Delete</strong></a>\n\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t\t<li class="js-dropdown-popup dropdown-popup" id="js-item-actions-response-' +
__e(checklist_item.id ) +
'"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t';
  } ;
__p += '\n\t\t\t\t\t';

					if (!_.isEmpty(role_links.where({
						slug: "convert_item_to_card"
					}))) { ;
__p += '\n\t\t\t\t\t\t<li class="pull-right">\n\t\t\t\t\t\t\t<a class="btn btn-link btn-sm pull-right js-convert-to-card" href="#" title="Convert to Card"><strong>Convert to Card</strong></a>\n\t\t\t\t\t\t</li>\n\t\t\t\t  ';
  } ;
__p += '\n\t\t\t\t\t<li class="dropdown pull-right">\n\t\t\t\t\t\t<a title="Item Options" class="dropdown-toggle js-show-item-options btn btn-link btn-sm" data-toggle="dropdown" href="#"><i class="icon-chevron-sign-down"></i></a>\n\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t\t<li class="js-dropdown-popup dropdown-popup" id="js-item-option-response-' +
__e(checklist_item.id ) +
'"></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["templates/checklist_item_mention_member"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board_user != null){ ;
__p += '\n<a class="clearfix ';
 if(!_.isUndefined(class_name)){;
__p +=
__e(class_name);
}else{;
__p += 'js-add-item-member';
};
__p += '" data-member-id="' +
__e(board_user.id ) +
'" href="#"> \n\t<span data-placement="bottom" data-toggle="tooltip" title="' +
__e( board_user.attributes.username ) +
'">\n\t';
 if(!_.isEmpty(board_user.attributes.profile_picture_path)) { 
		var profile_picture_path = board_user.showImage('User', board_user.attributes.user_id, 'small_thumb' );
	;
__p += '\n\t\t<img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(board_user.attributes.username ) +
']" title="' +
__e(board_user.attributes.username ) +
'" class="img-rounded img-responsive avatar avatar-sm">\n\t';
 } else {;
__p += '\n\t\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e(board_user.attributes.initials ) +
'</i>\n\t';
 } ;
__p += '\n\t</span> <span>' +
__e( board_user.attributes.username ) +
'</span>\n\n</a>\n';
 }else{;
__p += '\n No users available.\n';
};
__p += '\n';

}
return __p
};

this["JST"]["templates/checklist_item_mention_member_search_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\t\t\t\t\t\t\t\n\t<a href="#" class="js-back-to-item-options pull-left"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Mention Member</strong></span><a href="#" class="js-close-popup pull-right"><i class="icon-remove"></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<ul class="list-unstyled">\n\t\t<li>\n\t\t  <form method="post" class="text-center">\n\t\t\t<div class="form-group">\n\t\t\t  <label class="sr-only">Search Member</label>\n\t\t\t  <input type="text" id="inputItemUserSearch" autocomplete="off" placeholder="Search members" name="email" required class="js-item-search-member form-control input-sm">\n\t\t\t</div>\n\t\t  </form>\n\t\t</li>\n\t\t<li class="js-item-member-search-response">\n\t\t\tSearch for a person in ' +
__e( SITE_NAME ) +
' by name or email address.\n\t\t</li>\n\t</ul>\n</div>\n\n\n';

}
return __p
};

this["JST"]["templates/closed_boards_index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  ';
 if(!_.isEmpty(role_links.where({slug: "view_closed_boards"}))){ ;
__p += '\n  <div class="btn-block clearfix">\n    <div class="col-xs-12 js-header-closed-boards">\n    </div>\n  </div>\n  ';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/closed_boards_listing"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board != null){	
var style = '';
if (board.attributes.background_picture_url) {
	var background_picture_url = board.attributes.background_picture_url.replace("_XXXX.jpg", "_s.jpg");
	style = 'background-image:url(' + background_picture_url + '); background-size:cover;';
} else if (board.attributes.background_pattern_url) {
	var background_pattern_url = board.attributes.background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
	style = 'background-image:url(' + background_pattern_url + '); background-size:cover;';
} else if (board.attributes.background_color){
	style = 'background-color:' + board.attributes.background_color + ';color:#ffffff;';
} else {
	style = '';
}
;
__p += '\n<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t<span class="details navbar-btn">\n\t\t<span title="' +
__e( board.attributes.name ) +
'" class="board-list-item-name navbar-btn">' +
__e( board.attributes.name ) +
'</span>\n\t\t<span class="pull-right hide js-stared-conatiner js-stared-conatiner-' +
__e( board.attributes.board_id ) +
'"></span>  \n\t</span> \n<div class="pull-right js-reopen-dropdown dropdown">\n\t<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="btn btn-primary btn-xs">Reopen</span></a>\n\t<ul class="dropdown-menu reopen-dropdownmenu arrow arrow-right">\n\t\t<li class="js-visibility-popup js-dropdown-popup dropdown-popup">\n\t\t\t<div class="clearfix text-center col-xs-12">\n\t\t\t\t<span class="col-xs-10"><strong>Reopen Board</strong></span>\t\t\t\t\t\n\t\t\t\t<a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\t\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<form class="normal" name="BoardReopenForm" >\n\t\t\t\t\t<input name="is_closed" type="hidden" value="false">\n\t\t\t\t\t<div class="h6 btn-block">Are you sure to "Reopen"?</div>\n\t\t\t\t\t<div class="submit">\n\t\t\t\t\t\t<span class="btn btn-primary btn-xs js-board-reopen">Reopen</span>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div>\t\n';
 }else{ ;
__p += '\n <div class="alert alert-info">\n\tNo boards available.\n</div>\n';
};


}
return __p
};

this["JST"]["templates/copy_board_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<span class="pull-left">\n\t<span class="pull-left">This board will be </span>\n\t<span class="pull-left">Private</span>.\n</span>\n<a class="pull-left js-change-visibility" href="#">Change</a>\n';
 if (name == 'org') { ;
__p += '\n\t<span class="pull-left"><span class="pull-left">This board will be </span><span class="pull-left">Organization</span>.</span><a class="pull-left js-change-visibility" href="#">Change</a>\n';
 } else if (name == 'public') { ;
__p += '\n\t<span class="pull-left"><span class="pull-left">This board will be </span><span class="pull-left">Public</span>.</span><a class="pull-left js-change-visibility" href="#">Change</a>\n';
 } ;


}
return __p
};

this["JST"]["templates/copy_card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

        if (card.attachments.length > 0 || card.activities.length > 0 || card.labels.length > 0 || card.checklists.length > 0 || card.users.length > 0) { ;
__p += '\n\t\t<div class="form-group">\n\t\t\t<h4>Keep...</h4>\n\t\t\t';
 if (card.attachments.length > 0) {;
__p += '\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<input id="Attachments" class="hide" type="checkbox" name="keep_attachments" value="1" checked="checked">\n\t\t\t\t\t\t<label for="Attachments">\n\t\t\t\t\t\t\tAttachments (' +
__e( card.attachments.length ) +
')\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t   ';
 }
		   var comment = card.list.collection.board.activities.where({card_id: card.attributes.id, type: "add_comment"});
			if (comment.length > 0) { ;
__p += '\n\t\t\t   <div class="form-group">\n\t\t\t\t   <div class="checkbox">\n\t\t\t\t\t    <input id="Activities" class="hide" type="checkbox" name="keep_activities" value="1" checked="checked">\n\t\t\t\t\t\t<label for="Activities">\n\t\t\t\t\t\t\tComments (' +
__e( comment.length ) +
')\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t   ';
  }
			if (card.labels.length > 0) { ;
__p += '\n\t\t\t   <div class="form-group">\n\t\t\t\t   <div class="checkbox">\n\t\t\t\t\t    <input id="Labels" class="hide" type="checkbox" name="keep_labels" value="1" checked="checked">\n\t\t\t\t\t\t<label for="Labels">\n\t\t\t\t\t\t\tLabels (' +
__e( card.labels.length ) +
')\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
}
		     if (card.checklists.length > 0) { ;
__p += '\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t<input id="Checklists" class="hide" type="checkbox" name="keep_checklists" value="1" checked="checked">\n\t\t\t\t\t\t<label for="Checklists">\n\t\t\t\t\t\t\tChecklists (' +
__e( card.checklists.length ) +
')\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t   ';
 }
			if (card.users.length > 0) { ;
__p += '\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t<input id="users" class="hide" type="checkbox" name="keep_users" value="1" checked="checked">\n\t\t\t\t\t\t<label for="users">\n\t\t\t\t\t\t\tMembers (' +
__e( card.users.length ) +
')\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t   ';
 } ;
__p += '\n\t\t</div>\n';
	} 
        var content_board = '<div class="form-group clearfix"><select name="board_id" class="js-change-list col-xs-12 form-control panel-body cur">';
        var content_list = '<div class="form-group clearfix"><select name="list_id" class="js-change-position col-xs-12 form-control panel-body cur">';
        var content_position = '<div class="form-group clearfix"><select name="position" class="js-position col-xs-12 form-control panel-body cur">';
		var current_position = card.collection.indexOf(card) + 1;
        boards.each(function(board) {
	if (card.attributes.board_id == board.id) {
		content_board += '<option value="' + board.id + '" selected="selected">' + _.escape(board.attributes.name) + ' (current)</option>';
		board.lists.add(board.attributes.lists);
		var filtered_lists = board.lists.where({
			is_archived: false
		});
		_.each(filtered_lists, function(list) {
			if (card.attributes.list_id == list.id) {
				content_list += '<option value="' + list.id + '" selected="selected">' + _.escape(list.attributes.name) + ' (current)</option>';
				for(var i = 1; i <= list.attributes.card_count; i++){
					if (card.attributes.list_id == list.attributes.id && i == current_position) {
						content_position += '<option value="' + i + '" selected="selected">' + i + ' (current)</option>';
					} else {
						content_position += '<option value="' + i + '">' + i+ '</option>';
					}
				}
				
				var next_position = parseInt(list.attributes.card_count ) + 1;
				if( isNaN(list.attributes.card_count))
					next_position = 1;				
				content_position += '<option value="' + next_position + '">' + next_position + '</option>';
				
			} else {
				content_list += '<option value="' + list.id + '">' + _.escape(list.attributes.name) + '</option>';
			}

		});
	} else {
		content_board += '<option value="' + board.id + '">' + _.escape(board.attributes.name) + '</option>';
	}

});
        content_board += '</select></div>';
        content_list += '</select></div>';
        content_position += '</select></div>';
		var content = content_board + content_list + content_position;
;
__p += '\t\t\n' +
((__t = ( content )) == null ? '' : __t);

}
return __p
};

this["JST"]["templates/copy_from_existing_card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li><h4 class="text-center">Copy Card</h4></li>\n<li class="divider"></li>\n<li>\n\t<form role="form" method="post" class="js-copy-existing-card-form col-xs-12">\n\t\t<div class="col-xs-12">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="card-title">Title</label>\n\t\t\t\t<textarea id="card-title" class="form-control" rows="3" name="name">' +
__e(card.attributes.name) +
'</textarea>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="js-show-move-card-form-response col-xs-12">\n\t\t';

			var content = '';
			var content_board = '<div class="form-group"><select name="board_id" class="js-change-list form-control cur">';
			var content_list = '<div class="form-group"><select name="list_id" class="js-change-position form-control cur">';
			var content_position = '<div class="form-group"><select name="position" class="js-position form-control cur">';
			var is_first = true;
			boards.each(function(board) {
				 if (card.attributes.board_id == board.id) {
				 	 is_first = true;
					 content_board += '<option value="' + board.id + '" selected="selected">' + _.escape(board.attributes.name) + '(current)</option>';
				 } else {
					 content_board += '<option value="' + board.id + '">' + _.escape(board.attributes.name) + '</option>';
				 }
				 if(is_first){
				 	 is_first = false;
					 content_list = '<div class="form-group"><select name="list_id" class="js-change-position form-control cur">';
					 board.lists.add(board.attributes.lists);
					 var is_first_list = true;
					 board.lists.each(function(list) {
						is_first = false;
						 if (card.attributes.list_id == list.id) {
						 	 is_first_list = true;
							 content_list += '<option value="' + list.id + '" selected="selected">' + _.escape(list.attributes.name) + '(current)</option>';
							 board.cards.add(board.attributes.cards);
						 } else {
							 content_list += '<option value="' + list.id + '">' + _.escape(list.attributes.name) + '</option>';
						 }
						  if(is_first_list){
						  	content_position = '<div class="form-group"><select name="position" class="js-position form-control cur">';
							is_first_list = false;
							for(var i = 1; i <= list.attributes.card_count; i++){
								content_position += '<option value="' + i + '">' + i+ '</option>';
							}
						}
				
					 });
				 
				 }
			});
			content_board += '</select></div>';
			content_list += '</select></div>';
			content_position += '</select></div>';
			content = content_board + content_list + content_position;
		;
__p += '\n\t\t' +
((__t = ( content)) == null ? '' : __t) +
'\n\t\t</div>\n\t\t<div class="form-group col-xs-12 clearfix">\n\t\t\t<label class="sr-only">Create card</label>\n\t\t\t<input name="copied_card_id" type="hidden" value="' +
__e(card.attributes.id) +
'"/>\n\t\t\t<input type="submit" class="btn btn-primary col-xs-12 js-copy-existing-card" value="Create card">\n\t\t</div>\n\t</form>\n</li>\n\n\t\t\t\t';

}
return __p
};

this["JST"]["templates/copy_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\t\n\t<a href="#" class="js-back-to-list-actions pull-left" data-list-id="' +
__e( list.id ) +
'"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Copy List</strong></span><a href="#" class="js-close-popup pull-right"><i class="icon-remove"></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n\t\t\t<div class="col-xs-12">\n\t<form class="js-add-list" name="ListCloneForm" id="ListCloneForm">\n\t\t<div class="form-group required">\n\t\t\t<label for="inputListName">Name</label>\n\t\t\t<input maxlength="255" id="inputListName" type="text" name="name" autocomplete="off" placeHolder="Add a list" class="form-control input-sm" value="' +
__e( list.attributes.name ) +
'" required/>\n\t\t\t<input type="hidden" value="' +
__e( list.id ) +
'" name="clone_list_id"/>\n\t\t\t<input type="hidden" value="' +
__e( list.attributes.position ) +
'" name="position"/>\n\t\t</div>\n\t\t<div class="submit">\n\t\t\t<input type="submit" id="submitListAdd" class="btn  btn-primary" value="Create List"/>\n\t\t</div>\n\t</form>\n</div>';

}
return __p
};

this["JST"]["templates/edit_activity_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group required">\n\t<textarea rows="4" class="js-inputComment form-control" name="comment" required>' +
__e( activity.attributes.comment ) +
'</textarea>\n\t<input type="hidden" value="' +
__e( activity.attributes.id) +
'" name="id"/>\n</div>\n<div class="submit panel-body">\n\t<input type="submit" id="submitListAdd" class="btn  btn-primary" value="Save"/>\n\t<i class="icon-remove js-hide-edit-comment-form btn btn-link cur" title="Cancel" data-activity-id="' +
__e( activity.attributes.id) +
'"></i>\n</div>';

}
return __p
};

this["JST"]["templates/edit_board_member_permission_to_admin"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="list-unstyled list-inline clearfix">\n\t<li>\n\t\t<a class="js-show-board-member-permission-form" data-board_user_id="' +
((__t = ( board_user_id )) == null ? '' : __t) +
'" href="#">\n\t\t\t<span class="js-change-permission-content-' +
((__t = ( board_user_id )) == null ? '' : __t) +
'">Owner</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href="#" class="show js-board-user-activity">Activity</a>\n\t</li>\n\t<li>\n\t\t<div disabled="disabled"><span>Remove from board</span></div>\n\t</li>\n</ul>';

}
return __p
};

this["JST"]["templates/edit_board_member_permission_to_normal"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="list-unstyled list-inline clearfix">\n\t<li>\n\t\t<a class="js-show-board-member-permission-form" data-board_user_id="' +
__e( board_user_id ) +
'" href="#">\n\t\t\t<span class="js-change-permission-content-' +
__e( board_user_id ) +
'">Member</span>\n\t\t</a>\n\t</li>\n\t<li>\n\t\t<a href="#" class=" show js-board-user-activity">Activity</a></li>\n\t\t<li>\n\t\t\t<a class="js-show-confirm-delete-board-member" data-board_user_id="' +
__e( board_user_id ) +
'" href="#">\n\t\t\t\t<span>Remove from board</span>\n\t\t\t</a>\n\t\t</li>\n</ul>';

}
return __p
};

this["JST"]["templates/email_templates"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Main block start -->\n\n<section class="clearfix row">\n  <div class="col-xs-12">\n\t<div class="clearfix">\n\t\t<ul class="nav nav-tabs no-bor h3">\n\t\t';
 
			var i = 0;
			if (list.models.length > 0 ) { 
				_.each(list.models, function(email_tempalte) {				
					var settings = email_tempalte.get('template');
		;
__p += '\n\t\t\t\t<li ';
 if (!_.isUndefined(id) && id == email_tempalte.get('id')) { ;
__p += 'class="active" ';
} else if (_.isUndefined(id) && email_tempalte.get('id') == 1) { ;
__p += 'class="active" ';
};
__p += ' ><a href="#/email_templates/' +
__e(email_tempalte.get('id')) +
'">' +
__e( email_tempalte.get('display_name') ) +
'</a></li>\n\t\t';
 
					i++;
				});
			} 
		;
__p += '\n\t\t</ul>\n\t</div>\n\t\n\t<div class="row">\n\t\t<div class="tab-content col-sm-10">\n\t\t';
 if (list.models.length > 0 ) { 
				var j = 0;
				_.each(list.models, function(email_tempalte) {	
					var template = email_tempalte.get('template');
		;
__p += '\t\t\n\t\t\t\t<div class="modal-body tab-pane clearfix ';
 if (!_.isUndefined(id) && id == email_tempalte.get('id')) { ;
__p += ' active ';
} else if (_.isUndefined(id) && email_tempalte.get('id') == 1) { ;
__p += ' active ';
};
__p += '" id="settingTab' +
__e( email_tempalte.get('id') ) +
'">\n\t\t\t\t\t';
 if(!_.isEmpty(template)){ ;
__p += '\n\t\t\t\t\t<p class="alert alert-info ">' +
__e( template.description ) +
'</p>\n\t\t\t\t\t<form class="form-horizontal clearfix col-lg-6 col-md-8 col-sm-12 col-xs-12 js-email-templates-form" role="form" id="js-email-templates-form">\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t <label for="inputFromEmail" class="col-sm-4 control-label col-xs-12">From</label>\n\t\t\t\t\t\t <div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t\t<input type="text" id="inputFromEmail" name="from_email" class="form-control" value="' +
__e( template.from_email ) +
'" />\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t <label for="inputReplyToEmail" class="col-sm-4 control-label col-xs-12">Reply To</label>\n\t\t\t\t\t\t <div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t\t<input type="text" id="inputReplyToEmail" name="reply_to_email" class="form-control" value="' +
__e( template.reply_to_email ) +
'" />\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t <label for="inputSubject" class="col-sm-4 control-label col-xs-12">Subject</label>\n\t\t\t\t\t\t <div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t\t<input type="text" id="inputSubject" name="subject" class="form-control" value="' +
__e( template.subject ) +
'" />\n\t\t\t\t\t\t </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t <label class="col-sm-4 control-label col-xs-12" for="EmailTemplateEmailTextContent">Email Text Content</label>\n\t\t\t\t\t\t<div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t\t<textarea rows="6" id="EmailTemplateEmailTextContent" class="form-control" name="email_text_content">' +
__e( template.email_text_content ) +
'</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t<label for="submit2" class="sr-only col-sm-4 control-label col-xs-12">submit</label>\n\t\t\t\t\t\t<div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t<input type="submit" value="Submit" id="submit2" class="btn btn-primary">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</form>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</div>\n\t\t';
 
					j++;
				});
			} 
		;
__p += '\t\t\t\t\n\t\t</div>\n\t</div>\n  </div>\n</section>\n<!-- Main block end -->';

}
return __p
};

this["JST"]["templates/error_404"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '404 Page not found.';

}
return __p
};

this["JST"]["templates/flickr"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(photo != null){ ;
__p += ' \n\t';

		var path =  'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_s.jpg';
	;
__p += '\n\t<div class="clearfix">\n\t\t<a class="pull-left navbar-btn js-flickr-changebackground" href="#" target="_blank" data-farm="' +
((__t = ( photo.farm)) == null ? '' : __t) +
'" data-server="' +
((__t = ( photo.server)) == null ? '' : __t) +
'" data-id="' +
((__t = ( photo.id)) == null ? '' : __t) +
'" data-secret="' +
((__t = ( photo.secret)) == null ? '' : __t) +
'" data-title="' +
((__t = ( photo.title)) == null ? '' : __t) +
'">\n\t\t\t<img class="img-rounded" title="' +
((__t = ( photo.title)) == null ? '' : __t) +
'" alt="[Image: ' +
((__t = ( photo.title)) == null ? '' : __t) +
']" src="' +
((__t = ( path)) == null ? '' : __t) +
'" width="48" height="48">\n\t\t</a>\n\t</div>\t\n';
 } ;
__p += ' ';

}
return __p
};

this["JST"]["templates/footer"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<ul class="nav nav-pills pull-left"> \n  <li>\n  \t<a href="#/about" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo-icon.png" alt="[Images: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" id="js-footer-brand-img" /></a>\n\t<!-- Todo: quick fix. load image before offline. call after when goes offline--->\n\t<img src="img/logo-icon-offline.png" alt="[Images: ' +
__e( SITE_NAME ) +
']" style="display:none;" />\n  </li>\n  ';
 if(!_.isUndefined(authuser.user)){;
__p += '\n\t<li>\n\t\t';
 if(board_id !== undefined && board_id !== null && board_id !== "" && !_.isEmpty(this.music_content) && this.music_content !== ''){ ;
__p += '\n\t\t\t';
 if(authuser.user.is_productivity_beats === true || authuser.user.is_productivity_beats === 't') { ;
__p += '\n\t\t\t\t<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Productivity Beats - ' +
__e( this.music_name ) +
'" title="Productivity Beats - ' +
__e( this.music_name ) +
'" class="animation btn btn-default js-product-beat-action" data-type=\'on\'>\n\t\t\t\t<span><i class="icon-volume-up lead tada-animation"></i></span>\n\t\t\t\t</a>\n\t\t\t';
 } else { ;
__p += '\n\t\t\t\t<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Productivity Beats - ' +
__e( this.music_name ) +
'" title="Productivity Beats - ' +
__e( this.music_name ) +
'" class="animation btn btn-default js-product-beat-action" data-type=\'off\'>\n\t\t\t\t<span><i class="icon-volume-off lead text-muted"></i></span>\n\t\t\t\t</a>\n\t\t\t';
 } ;
__p += '\n\t\t';
 } ;
__p += '\n\t</li> \n\t';
 } else { ;
__p += '\n\t<li>\n\t\t';
 if(board_id !== undefined && board_id !== null && board_id !== "" && !_.isEmpty(this.music_content) && this.music_content !== ''){ ;
__p += '\n\t\t\t';
 if(window.sessionStorage.getItem('music_play') === "1") { ;
__p += '\n\t\t\t\t<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Productivity Beats - ' +
__e( this.music_name ) +
'" title="Productivity Beats - ' +
__e( this.music_name ) +
'" class="animation btn btn-default js-product-beat-action" data-type=\'on\'>\n\t\t\t\t<span><i class="icon-volume-up lead show"></i></span>\n\t\t\t\t</a>\n\t\t\t';
 } else { ;
__p += '\n\t\t\t\t<a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Productivity Beats - ' +
__e( this.music_name ) +
'" title="Productivity Beats - ' +
__e( this.music_name ) +
'" class="animation btn btn-default js-product-beat-action" data-type=\'off\'>\n\t\t\t\t<span><i class="icon-volume-off lead show text-muted"></i></span>\n\t\t\t\t</a>\n\t\t\t';
 } ;
__p += '\n\t\t';
 } ;
__p += '\n\t</li> \n\t\n\t';
 };
__p += '\n ';
 if(!_.isUndefined(authuser.user)){;
__p += '\t\n  ';
 if(!_.isEmpty(role_links.where({slug: "view_board_listing"}))){ ;
__p += '\n  <li class="dropdown"> \n\t  <a title="Dashboard" href="#" data-toggle="dropdown" class="btn btn-default js-show-boards-list"><span class="hidden-xs">Boards </span><span><i class="icon-collapse"></i></span> </a>\n\t  <ul role="menu" class="dropdown-menu js-dropdown-popup col-xs-12 js-show-add-boards-list">\n\t  \t <li class="js-show-boards-list-response"></li>\n\t\t <li class="clearfix js-qsearch-container js-boards-list-container">\n\t\t\t<div class="clearfix h6 col-xs-12">\n\t\t\t\t<input type="text" placeholder="Find boards by name..." class="js-search-boards form-control" id="inputBoardSearch">\n\t\t\t</div>\n\t\t </li>\n\t\t \n\t\t <li class="divider"></li>\n\t\t ';

			if (!_.isEmpty(role_links.where({
				slug: "view_closed_boards"
			}))) {
		;
__p += '\n\t\t\t<li class="clearfix js-closed-board-list dropdown dropdown-submenu dropdown js-boards-list-container-search">            \n\t\t\t\t<a href="#" class="js-board-dropdown dropdown-toggle js-open-popover" data-toggle="dropdown" title="Closed Boards">Closed Boards</a>\n\t\t\t\t<ul class="sidebar-boards-list js-closedboard-list  list-unstyled list-group dropdown-menu"></ul>\n\t\t\t\t</li>\n\t\t';

			}
			if (!_.isEmpty(role_links.where({
				slug: "view_stared_boards"
			}))) {
		;
__p += '\n\t\t\t<li class="clearfix js-board-dropdown js-stared-board-lists dropdown-submenu dropdown js-boards-list-container-search">            \n\t\t\t\t\t<a href="#" class="dropdown-toggle js-open-popover" data-toggle="dropdown" title="Starred Boards">Starred Boards</a>\t\t\t\t\n\t\t\t\t\t<ul class="sidebar-boards-list js-board-starred-list list-unstyled list-group dropdown-menu"></ul>\t\t\t\n\t\t\t\t</li>\n\t\t';

			}

			if (!_.isEmpty(role_links.where({
				slug: "view_my_boards"
			}))) {
		;
__p += '\n\t\t\t\t<li class="clearfix js-my-board-lists dropdown-submenu dropdown js-boards-list-container-search">\t\t\t\n\t\t\t\t\t<a href="#" class="js-board-dropdown dropdown-toggle js-open-popover" data-toggle="dropdown" title="My Boards">My Boards</a>\n\t\t\t\t\t<ul class="sidebar-boards-list js-myboard-list list-unstyled list-group dropdown-menu"></ul>\t\t\t\n\t\t\t\t</li>\n\t\t';

			} 		
		;
__p += '\n\t\t\t<li class="clearfix js-boards-list-container-search">            \n\t\t\t<a href="#/" title="Boards">Boards</a>\n\t\t\t</li>\n\t\t';


			if (!_.isEmpty(role_links.where({
				slug: "add_board"
			})) || !_.isEmpty(role_links.where({
				slug: "add_organization"
			}))) {
		;
__p += '\t\t\n\t\t\t<li class="divider js-boards-list-container-search"></li>\n\t\t\t<li class="js-boards-list-container-search dropdown clearfix">\n\t\t\t\t<a title="Add Board or Organization" class="dropdown-toggle js-show-organizations-board-from btn btn-link" data-toggle="dropdown" href="#"><span class="pull-left"><i class="icon-plus"></i></span> Add Board or Organization</a><ul role="menu" class="dropdown-menu dropdown-menu-right js-show-organizations-board-from-response js-dropdown-popup navbar-btn"></ul>\n\t\t\t\t</li>\n\t\t';
   
			 }
		;
__p += '\n\t  </ul>\n\t</li>\n  ';
 } ;
__p += '\n  ';
 if(typeof(model.user) !== "undefined" && !_.isEmpty(model.user) && (!_.isEmpty(role_links.where({slug: "view_organization_listing"})))){ ;
__p += '\n  <li><a title="Organizations" href="#/organizations" class="btn btn-default"><span class="hidden-xs">Organizations</span><span class="visible-xs"><i class="icon-group"></i></span></a></li>\n   ';
 } ;
__p += '\t\n   ';
 } ;
__p += '\t\n</ul>\n';
 if(!_.isUndefined(authuser.user)){;
__p += '\n<div class="col-xs-push-0 col-sm-push-0 col-md-push-0 col-lg-push-1 col-lg-4 col-md-4 col-sm-2 col-xs-3 hidden-xs">\n\t<form role="form" class="search-container clearfix">\n\t<div class="text-center clearfix hide search-loader" id="js-loader-img"><img src="img/ajax-loader.gif" alt="[Images:Loader]" title="Loading ..." /></div>\n\t  <div class="form-group">\n\t\t<input id="search-box" type="search" class="search-box pull-right form-control js-search search-box">\n\t\t<i class="icon-circle-blank search-loader hide" id="res"></i>\n\t\t<i class="icon-circle-blank search-loader text-danger hide" id="nres"></i>\n\t\t<label for="search-box" class="pull-right"><i class="icon-search btn btn-primary search-icon"></i></label>\n\t\t<ul class="dropdown-menu">\n\t\t\t<li class="js-show-search-result js-dropdown-popup dropdown-popup">\n\t\t\t</li>\n\t\t</ul>\n\t  </div>\n\t  <button type="submit" class="search-submit sr-only">Submit</button>\n\t</form>\n</div>\n ';
 } ;
__p += '\n<div class="pull-right clearfix">\n\t<ul class="nav nav-pills navbar-right">\n\t';
 if(!_.isUndefined(authuser.user)){;
__p += '\n\t';
 if(!_.isUndefined(authuser.user) &&  !_.isEmpty(model.user) && model.user.role_id == 1 && (!_.isEmpty(role_links.where({slug: "view_user_listing"})) || !_.isEmpty(role_links.where({slug: "setting_list"})) || !_.isEmpty(role_links.where({slug: "roles"})) || !_.isEmpty(role_links.where({slug: "view_email_template_listing"})) || !_.isEmpty(role_links.where({slug: "activities_listing"}))) ){ ;
__p += '\n\t  \t<li><a title="Admin CP" class="btn btn-primary pull-right" href="#/activities"><span class="icon-user lead"></span><span class="hidden-xs">Admin</span></a></li>\n\t  ';
 } ;
__p += '\n\t  <li class="dropdown">\n\t   <a href="#" data-toggle="dropdown" class="dropdown-toggle btn btn-default" title="' +
__e(model.user.username) +
'">\n\t   \t\t<span class="js-user-img">\n\t\t\t';
 if(!_.isEmpty(model.user.profile_picture_path)){ 
				var profile_picture_path = model.showImage('User', model.user.id, 'micro_thumb', true);
			;
__p += '\n\t\t\t\t<img class="img-rounded" width="16" height="16" src="' +
((__t = ( profile_picture_path)) == null ? '' : __t) +
'" alt="[Images: ' +
__e( model.user.username) +
']" title="' +
__e( model.user.username) +
'" />\n\t\t\t';
 }else{ ;
__p += '\n\t\t\t\t<i class="avatar avatar-color-194 avatar-sm">' +
__e( model.user.initials) +
'</i>\n\t\t\t';
 } ;
__p += ' \n\t\t\t</span>&nbsp; <b class="caret"></b>\n\t   </a>\n\t\t<ul class="dropdown-menu text-left js-change-avatar-form-response">\n\t\t\t<li> <a title="Logout" href="#/users/logout">Logout</a> </li>\t\t\t\n\t\t\t<li class="divider"></li>\n\t\t\t';
 if(model.is_show_enable_notification === true) { ;
__p += '\n\t\t\t\t<li><a title="Enable Desktop Notification" href="#" class="js-enable-desktop-notification">Enable Desktop Notification</a></li>\n\t\t\t';
 } ;
__p += '\t\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "user_changepassword"}))){ ;
__p += '\n\t\t\t\t<li><a title="Change Password" href="#/users/' +
__e(model.user.id) +
'/changepassword">Change Password</a></li>\n\t\t\t';
 } ;
__p += '\n\t\t    ';
 if(!_.isEmpty(role_links.where({slug: "view_user"}))){ ;
__p += '\n\t\t\t\t<li><a title="Profile" href="#/user/' +
__e(model.user.id) +
'">Profile</a></li>\n\t\t\t';
 } ;
__p += '\n\t\t</ul>\n\t  </li>\n\t  <li><a data-toggle="tooltip" data-placement="top" title="Chat" ';
 if(typeof(model.user) !== "undefined" && !_.isEmpty(model.user)){ ;
__p += 'href="#" ';
 }else{ ;
__p += ' href="#/users/login"';
 };
__p += ' id="add" class="btn btn-default pull-right  ';
 if(typeof(model.user) !== "undefined" && !_.isEmpty(model.user)){ ;
__p += 'js-show-chat';
 };
__p += '" data-original-title="Chat"><i class="icon-comment lead"></i></a></li> \n\t  ';
 if(!_.isEmpty(role_links.where({slug: "add_card"}))){ ;
__p += '\n\t  \t<li><a data-toggle="tooltip" data-placement="top" title="Instant add card" ';
 if(typeof(model.user) !== "undefined" && !_.isEmpty(model.user)){ ;
__p += 'href="#" ';
 }else{ ;
__p += ' href="#/users/login"';
 };
__p += ' id="add" class="btn btn-default pull-right  ';
 if(typeof(model.user) !== "undefined" && !_.isEmpty(model.user)){ ;
__p += 'js-show-instant-card-from';
 };
__p += '" data-original-title="Add New"><i class="icon-plus-sign lead"></i></a></li>\n\t  ';
 } ;
__p += '\n\t  <li class="dropdown notifications pull-right"><a data-toggle="dropdown" href="#" class="btn btn-default js-show-notification" title="Notifications"><sup class="badge notification-count hide" id="js-notification-count"></sup><i class="icon-bell lead"></i></a>\n\t\t<div class="tabbable tabs-below dropdown-menu pull-right js-dropdown-popup" role="menu">\n\t\t  <div class="tab-content bg-info clearfix">\n\t\t\t  <div class="tab-pane js-all-activity-list notification-list vertical-scrollbar col-xs-12" id="all_">\n\t\t\t\t<ul id="js-all-activities" class="list-unstyled"></ul>\n\t\t\t  </div>\n\t\t\t  ';
 if(!_.isEmpty(board_id)){ ;
__p += '\n\t\t\t\t  <div class="tab-pane js-boards-activity-list active notification-list vertical-scrollbar col-xs-12" id="board_">\n\t\t\t\t\t<ul id="js-board-activities"  class="list-unstyled"></ul>\n\t\t\t\t  </div>\n\t\t\t  ';
 } ;
__p += '\n\t\t\t\t';
 if(!_.isEmpty(board_id) && board_id !== 0 && board_id !== '0') { ;
__p += '\n\t\t\t\t\t<div class="text-center js-load-link" id="js-load-link1">\n\t\t\t\t\t\t<a href="#" title="View all activity" id="js-notification-load-more" class="js-board-load-more btn btn-link">Load more activities</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="text-center js-load-link hide" id="js-load-link2">\n\t\t\t\t\t\t<a href="#" title="View all activity" id="js-notification-load-more-all" class="js-board-load-more-all btn btn-link">Load more activities</a>\n\t\t\t\t\t</div>\n\t\t\t\t';
} else { ;
__p += '\n\t\t\t\t<div class="text-center js-load-link" id="js-load-link">\n\t\t\t\t\t<a href="#" title="View all activity" id="js-notification-load-more-all" class="js-all-load-more-all btn btn-link">Load more activities</a>\n\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t </div>\n\t\t\t<ul class="nav nav-tabs ';
 if(_.isEmpty(board_id)){ ;
__p += 'hide';
 } ;
__p += '">\n\t\t\t\t<li><a href="#all_" data-toggle="tab" class="js-all-activities">All</a></li>\n\t\t\t\t\n\t\t\t\t';
 if(!_.isEmpty(board_id) && board_id !== 0 && board_id !== '0'){ ;
__p += '\n\t\t\t\t\t<li class="active"><a href="#board_" data-toggle="tab" class="js-board-activities">In this board</a></li>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</ul>\n\t\t</div>\n\t  </li>\n\t  ';
 }else{ ;
__p += '\n\t <li class="';
 if(Backbone.history.fragment.indexOf('users/register') != -1){;
__p += 'active';
};
__p += '"><a href="#/users/register" title="Register"><strong>Register</strong></a></li>\n\t <li class="';
 if(Backbone.history.fragment.indexOf('users/login') != -1){;
__p += 'active';
};
__p += '"><a href="#/users/login" title="Login"><strong>Login</strong></a></li>\n\t  ';
 } ;
__p += '\n\t</ul>\n</div>\n<div class="hidden-blocks hide js-hidden-blocks"></div>\t';

}
return __p
};

this["JST"]["templates/header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(_.isEmpty(current_param) || ((typeof(user) == "undefined" || (typeof(user) != "undefined" && user.role_id != 1)) || (current_param !== 'activities' && current_param !== 'users' && current_param !== 'roles' && current_param !== 'settings' && current_param !== 'email_templates'))){ ;
__p += '\n<div id="js-navbar-default" class="navbar navbar-default" role="navigation">\n  <div class="container-fluid">\n  <div class="col-xs-12 btn-block">\n\t<div class="navbar-header">\n\t  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>\n\t  <h1 class="clearfix"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a></h1>\n\t</div>\n\t<nav class="navbar-collapse collapse row">\n\t  \n\t  ';
  if(typeof(user) == "undefined") { ;
__p += '\n\t  \t<ul class="nav navbar-nav navbar-right text-center">\n\t  \t';

			if(!_.isEmpty(role_links.where({slug: "users_register"}))) {
				if(!_.isEmpty(LDAP_LOGIN_ENABLED) && LDAP_LOGIN_ENABLED === "false") {
		;
__p += '\n\t\t<li class="';
 if(Backbone.history.fragment.indexOf('users/register') != -1){;
__p += 'active';
};
__p += '"><a href="#/users/register" title="Register"><strong>Register</strong></a></li>\n\t\t ';
 	
				}
		   }
			if(!_.isEmpty(role_links.where({slug: "users_login"}))){
		 ;
__p += '\n\t\t<li class="';
 if(Backbone.history.fragment.indexOf('users/login') != -1){;
__p += 'active';
};
__p += '"><a href="#/users/login" title="Login"><strong>Login</strong></a></li>\n\t\t ';

		 	}
		 ;
__p += '\n\t\t </ul>\n\t ';
 }else{ ;
__p += '\n\t \t<ul class="nav nav-pills navbar-right">\n\t\t\t<li class="';
  var fragment = Backbone.history.fragment; var fragments = fragment.split('/'); if(fragment.indexOf('boards')  != -1 && fragments.length == 1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards" title="My Boards" class="text-muted initialism"><i class="icon-user"></i></a></li>\n            <li class="';
 if(Backbone.history.fragment.indexOf('boards/closed') != -1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards/closed" title="Closed Boards" class="text-muted initialism"><i class="icon-th-large"></i></a></li>\n            <li class="';
 if(Backbone.history.fragment.indexOf('boards/starred') != -1){;
__p += 'active';
};
__p += ' navbar-btn"><a href="#/boards/starred" title="Starred Boards" class="text-muted initialism"><i class="icon-star"></i></a></li>\n        </ul>\n\t ';
 };
__p += '\n\t  \n\t</nav>\n   </div>\n  </div>\n</div>\n';
 } else if(typeof(user) != "undefined" && !_.isEmpty(current_param) && (current_param === 'activities' || current_param === 'users' || current_param === 'roles' || current_param === 'settings' || current_param === 'email_templates')){ ;
__p += '\n';
 
	if(!_.isEmpty(current_param) && (current_param === 'activities')) {
		current_title = 'Activities';
	} else if(!_.isEmpty(current_param) && (current_param === 'users')){ 
		current_title = 'Users';
	} else if(!_.isEmpty(current_param) && (current_param === 'roles')){ 
		current_title = 'Roles';
	} else if(!_.isEmpty(current_param) && (current_param === 'settings')){ 
		current_title = 'Settings';
	} else if(!_.isEmpty(current_param) && (current_param === 'email_templates')){ 
		current_title = 'Email Templates';
	} 
;
__p += '\n\n<div class="container-fluid bg-primary">\n<div class="navbar-header">\n\t<button data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle" type="button"> \n\t\t<span class="sr-only">Toggle navigation</span> \n\t\t<span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> \n\t</button>\n  <div class="clearfix navbar-btn navbar-left">\n\t<h1 class="navbar-left navbar-btn mob-no-mar clearfix"><div class="navbar-left"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"></a></div></h1>\n\t<ul class="list-inline navbar-left h2 navbar-btn navbar-form whitec text-center hidden-xs">\n            <li class="navbar-btn "><span class="h5">/</span></li>\n            <li><span class="icon-user h3"></span><span class="h4"> Admin CP</span></li>\n            <li class="navbar-btn "><span class="h5">/</span></li>\n            <li id="js-navbar-header"><span class="h4">' +
__e( current_title ) +
'</span></li>\n     </ul>\n\t ';
 if(!_.isEmpty(current_param) && (current_param === 'users')){ ;
__p += '\n\t <div class="pull-left well-sm"> <div class="js-dropdown dropdown  docmodal-submenu row">\n              <a data-toggle="dropdown" id="dropdownMenu1" class="dropdown-toggle btn btn-link label show" href="#"> <i class="icon-cog h3"></i></a>\n              <ul role="menu" class="dropdown-menu arrow">\n                 <li class="text-center text-muted"><strong>Sort</strong></li>\n                 <li class="divider"></li>\n                 <li><a title="Username" href="#" class="js-sort-by" data-field="username">Username</a></li>\n\t\t\t\t <li class="dropdown-submenu inner-dropdown dropdown"> <a href="#" title="Roles" data-toggle="dropdown" class="dropdown-toggle js-open-popover">Roles</a>\n                  <ul class="dropdown-menu">\n\t\t\t\t    <li class="inner-dropdown dropdown">\n\t\t\t\t\t\t<a title="Admin (' +
__e( this.admin_board_users ) +
')" href="#" class="js-sort-by" data-field="role_id">Admin (' +
__e( this.admin_board_users ) +
')</a>\n\t\t\t\t\t</li>\n                    <li class="inner-dropdown dropdown">\n\t\t\t\t\t\t<a title="User (' +
__e( this.normal_board_users ) +
')" href="#" class="js-sort-by" data-field="role_id">User (' +
__e( this.normal_board_users ) +
')</a>\n\t\t\t\t\t</li>\n                  </ul>\n                </li>\n                <li class="dropdown-submenu inner-dropdown dropdown"> <a href="#" title="Login" data-toggle="dropdown" class="dropdown-toggle js-open-popover">Login</a>\n                  <ul class="dropdown-menu">\n                    <li class="inner-dropdown dropdown">\n\t\t\t\t\t\t<a title="Login Time" href="#" class="js-sort-by" data-field="last_login_date">Time</a>\n\t\t\t\t\t</li>\n                    <li class="inner-dropdown dropdown">\n\t\t\t\t\t\t<a title="Login IP" href="#" class="js-sort-by" data-field="last_login_ip">IP</a>\n\t\t\t\t\t</li>\n                  </ul>\n                </li>\n                <li class="dropdown-submenu inner-dropdown dropdown"> <a href="#" title="Registered" data-toggle="dropdown" class="dropdown-toggle js-open-popover">Registered</a>\n                  <ul class="dropdown-menu">\n                    <li class="inner-dropdown dropdown">\n\t\t\t\t\t\t<a title="Time" href="#" class="js-sort-by" data-field="created">Time</a>\n\t\t\t\t\t</li>\n                    <li>\n\t\t\t\t\t\t<a title="Registered IP" href="#" class="js-sort-by" data-field="registered_ip">IP</a>\n\t\t\t\t\t</li>\n                  </ul>\n                </li>\n                <li><a title="Organizations Count" href="#" class="js-sort-by" data-field="joined_organization_count">Organizations Count</a>\n\t\t\t\t</li>\n                <li><a title="Board Count" href="#" class="js-sort-by" data-field="joined_board_count">Board Count</a>\n\t\t\t\t</li>\n              </ul>\n            </div></div>\n\t\t\t\t';
 
				if(!_.isEmpty(role_links.where({slug: "users"}))) {
					if(!_.isEmpty(LDAP_LOGIN_ENABLED) && LDAP_LOGIN_ENABLED === "false") { ;
__p += '\n\t\t\t\t\t<div class="pull-left well-sm"><a class="btn btn-link show label" href="#/users/admin_user_add" title="Add User"><i class="icon-plus-sign h3"></i><span class="h4">Add User</span></a></div>\n\t\t\t\t';
 } 
				} ;
__p += '\n\t\t\t';
 } ;
__p += '\n\t</div>\n\t</div>\n\t<nav class="navbar-collapse collapse">\n\t<div class="navbar-right clearfix">\n\t\t<ul class="nav nav-pills navbar-left">\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "activities_listing"}))){ ;
__p += '\n\t\t\t\t<li class="js-admin-activity-menu navbar-btn"><a title="Activities" href="#/activities">Activities</a></li>\n\t\t\t';
 } ;
__p += '\t\t\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_user_listing"}))){ ;
__p += '\n\t\t\t\t<li class="js-admin-user-menu navbar-btn"><a title="Users" href="#/users">Users</a></li>\n\t\t\t';
 } ;
__p += '\t\t\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "roles"}))){ ;
__p += '\n\t\t\t\t<li class="js-admin-role-menu navbar-btn"><a title="Roles" href="#/roles">Roles</a></li>\n\t\t\t';
 } ;
__p += '\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "setting_list"}))){ ;
__p += '\n\t\t\t\t<li class="js-admin-setting-menu navbar-btn"><a title="Settings" href="#/settings">Settings</a></li>\n\t\t\t';
 } ;
__p += '\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_email_template_listing"}))){ ;
__p += '\n\t\t\t\t<li class="js-admin-email-menu navbar-btn"><a title="Email Templates" href="#/email_templates">Email Templates</a></li>\n\t\t\t';
 } ;
__p += '\n\t\t</ul>\n\t</div>\n\t</nav>\n</div>\n';
 } ;


}
return __p
};

this["JST"]["templates/instant_card_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (boards.models.length == 0 || _.isEmpty(boards.models[0])) { ;
__p += '\n\t';
 if (boards.models.length == 0) { ;
__p += '\n \t\t\tPlease add board.\n\t';
 }else if ( _.isEmpty(boards.models[0])){ ;
__p += '\n\t\t\tPlease add list.\n\t';
 };
__p += '\n';
 }else { ;
__p += '\n<form class="form-horizontal js-instantCardAddForm js-outside-backbone" role="form" name="CardAddForm" >\n\t<div class="clearfix" >\n\t\t<div class="form-group">\n\t\t\t<label for="title" class="sr-only">Card Title</label>\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<input type="text" class="form-control" placeholder="Card Title" name="name" id="inputCardName" required />\n\t\t\t\t<input type="hidden" value="" class="js-instant-card-user-ids" name="user_ids">\n\t\t\t</div>\n\t\t</div>\n\t\t';
 if (boards.models.length > 0) { ;
__p += '\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t<select name="board_id"  id="board_id" class="js-chosen-select col-xs-12 js-instant-card-board" placeholder="Select Board">\n\t\t\t\t\t<option></option>\n\t\t\t\t\t';
  var first_board = null;
						_.each(boards.models, function(board) {
							if (!_.isEmpty(board.attributes.lists) && board.attributes.lists.length > 0) {
								if (first_board === null) {
									first_board = board;
								};
__p += '\n\t\t\t\t\t\t\t\t<option value="' +
__e(board.id) +
'">' +
__e( board.attributes.name) +
'</option>\n\t\t\t\t\t\t   ';
}
						});
					;
__p += '\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t<select name="list_id" id="list_id" class="js-chosen-select col-xs-12 js-instant-card-add-list" placeholder="Select List">\n\t\t\t\t\t<option></option>\n\t\t\t\t\t';

						if (first_board !== null) {
							_.each(first_board.attributes.lists, function(list) {
				    ;
__p += '\n\t\t\t\t\t\t\t\t<option value="' +
__e( list.id) +
'">' +
__e( list.name ) +
'</option>\n\t\t\t\t\t';
		}); ;
__p += '\n\t\t\t\t\t</select>\n\t\t\t\t\t';
		var position = _.max(first_board.attributes.lists, function(list) {
								return list.position;
							});
							if (isNaN(position.position)) {
								position.position = first_board.attributes.board_lists.length;
							}
					;
__p += '\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\n\t\t';
 } ;
__p += '\n\t\t <div class="form-group">\n\t\t \t<label class="sr-only">Description</label>\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<textarea class="form-control" rows="3" placeholder="Description" name="description" id="inputCardDescription"></textarea>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="clearfix form-group">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<ul class="list-inline pull-left">\n\t\t\t\t\t<li class="dropdown dropup">\n\t\t\t\t\t\t<a title="Users" class="btn btn-link dropdown-toggle js-add-member-dropdown" data-toggle="dropdown" href="#"><i class="icon-user js-instant-user text-muted"></i></a>\n\t\t\t\t\t\t<ul class="dropdown-menu js-dropdown-popup arrow arrow-bottom">\n\t\t\t\t\t\t\t<li class="js-add-member-dropdown-load js-dropdown-popup dropdown-popup js-instant-card-member-search-response">\n\t\t\t\t\t\t\t\t<div class="col-xs-12 text-center clearfix"><span class="col-xs-10"><strong>Members</strong></span><a href="#" class="js-close-popover pull-right"><i class="icon-remove "></i></a></div>\n\t\t\t\t\t\t\t\t <div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t\t\t <div class="col-xs-12">\n\t\t\t\t\t\t\t\t\t <div class="form-group">\n\t\t\t\t\t\t\t\t\t   <label class="sr-only">Search Member</label>\n\t\t\t\t\t\t\t\t\t   <div class="col-xs-12"><input type="text" autocomplete="off" id="inputInstantCardAddUserSearch" placeholder="Username OR Email" name="email" class="js-search-users form-control input-sm"></div>\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="duedate">\n\t\t\t\t\t\t<span title="Calendar" class="btn btn-link"><i class="icon-calendar cur js-instant-date text-muted"></i></span>\n\t\t\t\t\t\t<input type="hidden" class="form-control input-sm js-instant-duedate" name="due_date" />\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="dropdown dropup">\n\t\t\t\t\t\t<a class="btn btn-link js-show-card-label-form" data-toggle="dropdown" title="Labels" href="#"><i class="icon-tag js-instant-label"></i></a>\n\t\t\t\t\t\t<ul class="dropdown-menu list-unstyled js-show-instant-card-label-form-response arrow arrow-bottom"></ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t<div class="pull-right">\n\t\t\t\t\t<input type="submit" class="btn btn-primary" value="Save">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n';
 };


}
return __p
};

this["JST"]["templates/instant_card_add_labels_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 text-center clearfix"><span class="col-xs-10"><strong>Labels</strong></span><a href="#" class="js-close-popover pull-right "><i class="icon-remove"></i></a></div>\n<div class="col-xs-12 divider"></div>\n<div class="">\n\t<div class="col-xs-12">\n\t\t<input type="text" class="js-card-label" name="labels" />\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/instant_card_add_members_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<input type="hidden" name="members" value="' +
__e( user_id ) +
'"/>';

}
return __p
};

this["JST"]["templates/list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n\t<div class="list-header js-list-head ';
 if(!_.isUndefined(authuser.user)){;
__p += 'cur-grab';
};
__p += '">\n\t  <div class="dropdown clearfix">\n\t\t<a href="#" class="pull-left ';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "edit_list"}))){ ;
__p += 'js-show-edit-list-form';
 }else{ ;
__p += ' js-no-action';
};
__p += '"><strong>' +
__e( list.attributes.name ) +
'</strong>';
 var is_sub_class = 'hide'; if(!_.isEmpty(list.subscriber.attributes) && list.subscriber.attributes.is_subscribed == true){ is_sub_class = ''; };
__p += ' <i class="icon-eye-open js-list-subscribed-' +
__e( list.attributes.id ) +
' ' +
__e( is_sub_class ) +
'"></i></a>\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_list"}))){ ;
__p += '\n\t\t<form role="form" class="form-horizontal js-edit-list hide">\n\t\t\t<div class="form-group">\n\t\t\t  <label class="col-sm-4 control-label hide" for="inputListName">Name</label>\n\t\t\t  <div class="col-sm-12">\n\t\t\t\t\t<input type="text" maxlength="255" autocomplete="off" id="inputListName" name="name" required value="' +
__e( list.attributes.name ) +
'" class="form-control"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label class="sr-only col-sm-4 control-label hide" for="submit2">submit</label>\n\t\t\t\t<div class="col-sm-12">\n\t\t\t\t\t<input type="submit" name="Save" class="btn btn-primary" value="Save" />\n\t\t\t\t\t<i class="icon-remove js-hide-edit-list-form btn btn-link cur" title="Cancel"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t\t';
 } ;
__p += '\n\t\t';
if(!_.isUndefined(authuser.user)) {;
__p += '\n\t\t<a href="#" class="dropdown-toggle pull-right js-show-list-actions" id="js-show-list-actions-' +
__e( list.attributes.id ) +
'" data-toggle="dropdown" title="List Actions" data-list-id="' +
__e( list.attributes.id ) +
'"><i class="icon-cog text-danger"></i></a>\n\t\t';
 } ;
__p += '\n\t  </div>\n\t</div>\n\t<div class="list-content vertical-scrollbar vertical-scrollbar-box js-board-list-cards" id="js-card-listing-' +
__e( list.attributes.id ) +
'">\n\t</div>\n\t';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "add_card"}))){ ;
__p += '\n\t\t<div class="list-footer clearfix">\n\t\t\t<div class="pull-left"><a href="#" title="Add a Card" class="js-show-add-card-form js-bottom text-muted">Add a card</a></div>\n<div class="js-card-add-form-' +
((__t = ( list.attributes.id )) == null ? '' : __t) +
'"></div>\t\t\t\n\t\t</div>\n\t';
 } ;
__p += '\t\n  ';

}
return __p
};

this["JST"]["templates/list_actions"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	var is_subscribed = '<i class="icon-ok hide"></i>';
    var subscribe_class = 'js-list-subscribe';
	var subscribe = subscribers.findWhere({
		 user_id: parseInt(authuser.id)
	 });
	 var subscribe_id = '';
	 if (!_.isEmpty(subscribe) && subscribe.attributes.is_subscribed === true) {
		 is_subscribed = '<i class="icon-ok"></i>';
		 subscribe_class = 'js-list-unsubscribe';
		 subscribe_id = subscribe.attributes.id;
	 }
;
__p += '\n<li class="text-center"><strong>List Actions</strong></li>\n<li class="divider"></li>\n';
 if(!_.isEmpty(role_links.where({slug: "add_card"}))){ ;
__p += '\n\t<li><a href="#" title="Add Card" class="js-show-add-card-form">Add Card</a></li>\n';
 } ;
__p += '\t\n';
 if(!_.isEmpty(role_links.where({slug: "add_list"})) && !is_offline_data){ ;
__p += '\n\t<li class="js-hide-on-offline"><a href="#" title="Copy List" class="js-show-copy-list-form">Copy List</a></li>\n';
 } ;
__p += '\t\n';
 if(!_.isEmpty(role_links.where({slug: "edit_list"}))){ ;
__p += '\n\t<li><a href="#" title="Move List" class="js-show-move-list-form" data-list-id="' +
__e( list.id ) +
'">Move List</a></li>\n';
 } ;
__p += '\t\t\n';
 if(!_.isEmpty(role_links.where({slug: "subscribe_list"}))){ ;
__p += '\n\t<li><a href="#" title="Subscribe" class="highlight-icon ' +
((__t = ( subscribe_class )) == null ? '' : __t) +
'" data-list-id="' +
__e( list.id ) +
'" data-subscribe-id="' +
__e( subscribe_id ) +
'"><span class="js-subscribe-text">Subscribe';
if (!_.isEmpty(subscribe) && subscribe.attributes.is_subscribed === true) {;
__p += 'd';
};
__p += '</span> ' +
((__t = ( is_subscribed )) == null ? '' : __t) +
'</a></li>\n';
 } ;
__p += '\t\n<li class="divider"></li>\n';
 if(!_.isEmpty(role_links.where({slug: "move_list_cards"}))){ ;
__p += '\n\t<li><a href="#" title="Move All Cards in This List" class="js-show-move-card-list-form" data-list-id="' +
__e( list.id ) +
'">Move All Cards in This List</a></li>\n';
 } ;
__p += '\n';
 if(!_.isEmpty(role_links.where({slug: "edit_list"}))){ ;
__p += '\n\t<li><a href="#" title="Archive All Cards in This List" class="js-show-confirm-archive-cards" data-list-id="' +
__e( list.id ) +
'">Archive All Cards in This List</a></li>\n';
 } ;
__p += '\n<li class="divider"></li>\n<li><a href="#" title="Show Attachments" class="js-show-list-modal">Show Attachments</a></li>\n';
 if(!_.isEmpty(role_links.where({slug: "edit_list"}))){ ;
__p += '\n\t<li><a href="#" title="Archive This List" class="js-show-confirm-archive-list" data-list-id="' +
__e( list.id ) +
'">Archive This List</a></li>\n';
 } ;
__p += '\n';
 if(!_.isEmpty(role_links.where({slug: "delete_list"}))){ ;
__p += '\n<li><a href="#" title="Delete This List" class="js-show-confirm-list-delete" data-list-id="' +
__e( list.id ) +
'">Delete This List</a></li>\n';
 } ;


}
return __p
};

this["JST"]["templates/list_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="list js-list-form well ">\n\t<a href="#" class="js-show-add-list-form toggle-show text-muted" title="Add a list">Add a list</a>\n\t<span class="hide"></span>\n\t<form class="js-add-list">\n\t\t<div class="form-group required">\n\t\t\t<label for="inputListName" class="hide">Name</label>\n\t\t\t<input maxlength="255" type="text" id="inputListName" name="name" autocomplete="off" class="form-control input-sm"placeholder="Add a list" required />\n\t\t</div>\n\t\t<div class="submit">\n\t\t\t\n\t\t\t<input type="submit" name="Save" class="btn btn-primary" value="Save"/>\n\t\t\t<i class="icon-remove js-hide-add-list-form btn btn-link cur" title="Cancel"></i>\n\t\t</div>\n\t</form>\n</div>';

}
return __p
};

this["JST"]["templates/list_archive_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<a href="#" class="js-back-to-list-actions pull-left" data-list-id="' +
__e( list.id) +
'"><i class="icon-caret-left "></i></a><span class="col-xs-10"><strong>Archive This List</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove "></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<p>This will remove list from the board. To view archived lists and bring them back to the board, click "Settings" > "Archived Items" > "Switch to lists".</p>\n\t<a class="js-archive-list btn  btn-primary" title="Archive" data-list-id="' +
__e( list.id) +
'">Archive</a>\n</div>';

}
return __p
};

this["JST"]["templates/list_cards_archive_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\t\n\t\t<a href="#" class="js-back-to-list-actions pull-left" data-list-id="' +
__e( list.id) +
'"><i class="icon-caret-left "></i></a><span class="col-xs-10"><strong>Archive All Cards in this List?</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove "></i></a></span></h4>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<p>This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click "Menu" > "Archived Items". </p>\n\t<a class="js-archive-card btn  btn-primary" title="Archive All" data-list-id="' +
__e( list.id) +
'">Archive All</a>\n</div>';

}
return __p
};

this["JST"]["templates/list_delete_confirm"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\t\n\t<a href="#" class="js-back-to-list-actions pull-left" data-list-id="' +
__e( list.id ) +
'"><i class="icon-caret-left "></i></a><span class="col-xs-10"><strong>Delete This List</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove "></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<p>This will remove list from the board. You can\'t undo the list after delete.</p>\t\n\t<a class="js-delete-list btn  btn-primary" title="Delete List" data-list-id="' +
__e( list.id ) +
'">Delete</a>\n</div>';

}
return __p
};

this["JST"]["templates/login"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">\n\t<div class="panel panel-default">\n\t\t <div class="panel-heading lead">\n\t\t\tLogin\n\t\t </div>\n\t\t <div class="panel-body well-lg">\n\t\t\t<form class="form-horizontal clearfix col-xs-12" role="form" name="UserLoginForm" id="UserLoginForm">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t';
 
					   if(!_.isEmpty(LDAP_LOGIN_ENABLED) && LDAP_LOGIN_ENABLED == "true"){
							loginPlaceholder = 'LDAP/STANDARD Login';
					   }else if(!_.isEmpty(LDAP_LOGIN_ENABLED) && LDAP_LOGIN_ENABLED == "true") { 
							loginPlaceholder = 'LDAP Login';
					   } else {
							loginPlaceholder = 'Email or Username';
					   }
					;
__p += '\n\t\t\t\t  <label for="inputEmail" class="sr-only control-label">Email or Username</label>\n\t\t\t\t  <input type="text" placeholder="' +
((__t = ( loginPlaceholder )) == null ? '' : __t) +
'" class="form-control" id="inputEmail" name="email" required />\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t  <label for="inputPassword" class="sr-only control-label">Password</label>\n\t\t\t\t  <input type="password" placeholder="Password" class="form-control" id="inputPassword" name="password" required/>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t  <label for="submit2" class="sr-only ontrol-label">Login</label>\n\t\t\t\t  <input type="submit" value="Submit" class="btn btn-primary col-xs-12" value="Login" id="submitLogin" />\n\t\t\t\t</div>\n\t\t\t\t<ul class="list-inline small text-center">\n\t\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "users_forgotpassword"}))){ ;
__p += '\n\t\t\t\t\t<li><a href="#/users/forgotpassword" title="Forgot your password?" class="text-primary">Forgot your password?</a></li>\n\t\t\t\t\t';

					  }
					if(!_.isEmpty(role_links.where({slug: "users_register"}))){
						if ( (!_.isEmpty(LDAP_LOGIN_ENABLED) && LDAP_LOGIN_ENABLED === "false" ) || (!_.isEmpty(STANDARD_LOGIN_ENABLED) && (STANDARD_LOGIN_ENABLED === "true"))) {
					;
__p += '\n\t\t\t\t\t<li>|</li>\n\t\t\t\t\t<li><a href="#/users/register" title="Register" class="text-primary">Register</a></li>\n\t\t\t\t\t';

						}
					}
					;
__p += '\n\t\t\t\t</ul>\n\t\t  </form>\n\t\t </div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/modal_activity_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal fade" id="modalActivityView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t  <div class="modal-content">\n\t\t\t<div class="modal-header clearfix">\n\t\t\t  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t  <span class="col-xs-10"><strong>';
 if(type == 'board'){ ;
__p += 'Board';
}else{ ;
__p += 'User';
};
__p += ' Activity  </strong></span>\t\t\t  \n\t\t\t</div>\t\t\t\n\t\t\t<div class="modal-body scrollbar clearfix">\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t<div class="clearfix notification-list">\n\t\t\t\t<ul class="list-unstyled" id="js-activities-list"></ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="clearfix text-center">\n\t\t\t\t<a href="#" class="js-load-more hide">Load More Activity</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div><!-- /.modal-content -->\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/modal_card_member_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="clearfix text-center col-xs-12">\n\t<span class="col-xs-10"><strong>Members</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove"></i></a>\t\t\n</li>\n<li class="col-xs-12 divider"></li>\n';

	board_users.each(function(board_user) {
	var added_user = users.findWhere({
		card_id: card.id,
		user_id: board_user.get('user_id')
	});
	if (_.isUndefined(added_user)) {
;
__p += '\n\t   <li><a href="#" class="highlight-icon js-add-card-member" data-user-id="' +
__e( board_user.get('user_id') ) +
'" data-user-name="' +
__e( board_user.get('username') ) +
'" data-user-initial="' +
__e(board_user.get('initials') ) +
'" data-user-profile-picture-path="' +
__e(board_user.get('profile_picture_path') ) +
'" >' +
__e(  board_user.get('username') ) +
'</a></li>\n  ';
  } else { ;
__p += '\n\t\t<li><a href="#" class="highlight-icon js-remove-card-member" data-card-user-id="' +
__e(  added_user.id ) +
'"><i class="avatar avatar-color-194 img-rounded" title="' +
__e(  board_user.get('username') ) +
'">' +
__e(board_user.get('initials') ) +
'' +
__e(board_user.get('username') ) +
'</i></a> <i class="icon-ok"></i></li>\n';
  }
}); ;
__p += ' ';

}
return __p
};

this["JST"]["templates/modal_card_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<section class="row js-card-dock-modal-' +
__e( card.attributes.id ) +
' js-card-container" id="dropzone' +
__e( card.attributes.id ) +
'">\n  <div class="pull-right js-attachment-loader"></div>\n  <div class="clearfix col-xs-12">\n  <h3 class="navbar-btn"> <span class="icon-credit-card text-muted"></span> <a href="" title="' +
__e( card.attributes.name ) +
'" class="';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "edit_card"}))){ ;
__p += 'js-show-card-title-edit-form';
 }else{ ;
__p += ' js-no-action';
};
__p += '">' +
__e( card.attributes.name ) +
'</a><small> in list</small> <span class="dropdown"><a class="dropdown-toggle ';
 if(!_.isUndefined(authuser.user)){ ;
__p += 'js-show-move-card-form';
}else{;
__p += 'js-no-action';
};
__p += '" data-toggle="dropdown" title="' +
__e( list.attributes.name ) +
'" href="#">' +
__e( list.attributes.name ) +
'</a>\n  ';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t<ul class="dropdown-menu arrow col-xs-12 panel-body">\n\t\t<li class="col-xs-12 clearfix text-center"><div> <span class="col-xs-10"><strong>Move Card</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div></li>\n\t\t<li class="col-xs-12 divider"></li>\n\t\t<li class="col-xs-12">\n\t\t<form role="form" class="js-move-card" name="MoveCardForm" id="MoveCardForm">\n\t\t  <div class="js-show-move-card-form-response"> </div>\n\t\t  <div class="form-group clearfix panel-body">\n\t\t\t<label class="sr-only">Move</label>\n\t\t\t<input type="submit" id="submitListMove" class="btn btn-primary col-xs-12" value="Move" />\n\t\t  </div>\n\t\t</form>\n\t  </li>\n\t</ul>\n\t';
 } ;
__p += '\n\t</span>\n\t';

		if(!_.isUndefined(authuser) && !_.isUndefined(authuser.user)){
			var cards_subscribers = card.cards_subscribers.where({
				is_subscribed: true,
				user_id: parseInt(authuser.user.id)
			});
		}
		
		var subscribed = '';
		if(!_.isUndefined(cards_subscribers) && !_.isEmpty(cards_subscribers)){
	 ;
__p += '\n\t<span class="icon-eye-open"></span>\n\t';
 } ;
__p += '\n  </h3>\n  <div class="clearfix navbar-btn row">\n\t  <div class="splitter-wrap editor ui-resizable" >\n\t\t<div class="inner col-xs-12">\n\t\t\t<ul class="list-unstyled navbar-btn row">\n\t\t\t  <li class="list-group-item list-group-item-info clearfix">\n\t\t\t\t<div class="list-group-item-heading">\n\t\t\t\t  \n\t\t\t\t  ';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "edit_card"}))){ ;
__p += '\n\t\t\t\t  <form role="form" class="form-horizontal hide js-card-edit-form" name="cardTitleEditForm" id="cardTitleEditForm">\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <div class="col-sm-11">\n\t\t\t\t\t\t<textarea rows="4" id="inputCardName" name="name" required  class="form-control">' +
__e( card.attributes.name ) +
'</textarea>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <div class="col-sm-8">\n\t\t\t\t\t\t<input type="submit" value="Save" id="submitCardTitleEditForm" class="btn btn-primary">\n\t\t\t\t\t\t<a class="js-cancel-card-title-edit btn btn-link"><i class="icon-remove"></i></a> </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t</div>\n\t\t\t\t<ul class="list-group-item-text list-inline clearfix">\n\t\t\t\t  <li class="">\n\t\t\t\t\t<h4 class="text-muted list-group-item-heading">Members</h4>\n\t\t\t\t\t<ul class="list-inline clearfix" id="js-card-users-list-' +
__e( card.attributes.id ) +
'">\n\t\t\t\t\t';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t\t\t\t\t  <li id="js-card-user-add-container">\n\t\t\t\t\t\t<div class="dropdown js-member-dropdown"> <a class="dropdown-toggle js-show-add-member-form btn btn-default" role="button" data-toggle="dropdown" title="Add new Members" href="#"> <i class="icon-plus"></i> </a>\n\t\t\t\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t\t\t\t\t<li> <div class="clearfix text-center col-xs-12"><span class="col-xs-10"><strong>Members</strong></span><i class="icon-remove cur"></i></div></li>\n\t\t\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t\t\t<li class="col-xs-12">\n\t\t\t\t\t\t\t  <form method="post" class="text-center" name="addMember">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t  <label class="sr-only">Search Member</label>\n\t\t\t\t\t\t\t\t  <input type="text" autocomplete="off" id="inputOrganizationUserSearch" placeholder="Search members" name="email" required class="js-search-users form-control input-sm">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class="js-organization-member-search-response col-xs-12 small"> Search for a person in ' +
__e( SITE_NAME ) +
' by name or email address. </li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  ';
};
__p += '\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "view_card_labels"}))){ ;
__p += '\n\t\t\t\t  <li class="">\n\t\t\t\t\t<h4 class="text-muted list-group-item-heading">Labels</h4>\n\t\t\t\t\t<ul class="list-inline clearfix js-card-labels-list">\n\t\t\t\t\t';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t\t\t\t\t  <li>\n\t\t\t\t\t\t<div class="dropdown js-label-dropdown"> <a class="dropdown-toggle js-show-card-label-form btn btn-default" role="button" data-toggle="dropdown" title="Add new Labels" href="#"> <i class="icon-plus"></i></a>\n\t\t\t\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12 js-show-card-label-form-response">\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </li>\n\t\t\t\t\t  ';
};
__p += '\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t  ';
 if (!_.isEmpty(card.card_voters)) { ;
__p += '\n\t\t\t\t  <li class="">\n\t\t\t\t\t<h4 class="text-muted list-group-item-heading">Votes</h4>\n\t\t\t\t\t<ul class="list-inline clearfix">\n\t\t\t\t\t  <li class="dropdown"><a href="#" title="Add Vote" class="btn btn-default js-show-card-voters-list dropdown-toggle" data-toggle="dropdown">' +
__e( card.card_voters.length ) +
' vote</a>\n\t\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-left arrow js-show-card-voters-list-response">\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </li>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t  ';
 if(!_.isEmpty(card.attributes.due_date) && card.attributes.due_date != 'NULL') { ;
__p += '\n\t\t\t\t  <li class="">\n\t\t\t\t\t<h4 class="text-muted list-group-item-heading">Due Date</h4>\n\t\t\t\t\t<ul class="list-inline clearfix">\n\t\t\t\t\t';
 
						var nDate = new Date(card.attributes.due_date).toString(); 
					;
__p += '\n\t\t\t\t\t  <li class="dropdown"> <a class="btn btn-default dropdown-toggle ';
 if(!_.isUndefined(authuser.user)){ ;
__p += 'js-edit-card-due-date-form';
}else{;
__p += 'js-no-action ';
};
__p += '" role="button" data-toggle="dropdown" title="Due date" href="#">' +
((__t = ( dateFormat(nDate, 'mmm dd yyyy h:MM TT')  )) == null ? '' : __t) +
'</a>\n\t\t\t\t\t  ';
 if(!_.isUndefined(authuser.user)){ ;
__p += '\n\t\t\t\t\t\t<ul class="dropdown-menu arrow col-xs-12 panel-body">\n\t\t\t\t\t\t  <li>\n\t\t\t\t\t\t\t<h4 class="text-center">Due date</h4>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t  <li class="divider"></li>\n\t\t\t\t\t\t  <li class="js-edit-card-due-date-form-response">\n\t\t\t\t\t\t\t<form class="form-horizontal clearfix js-card-edit-form" name="cardDueDateEditForm" id="cardDueDateEditForm">\n\t\t\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t  <label>Date</label>\n\t\t\t\t\t\t\t\t  <input type="text" class="form-control input-sm js-card-duedate-edit-' +
((__t = (card.attributes.id)) == null ? '' : __t) +
'" name="due_date" data-format="yyyy-MM-dd" required />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t  <label>Time</label>\n\t\t\t\t\t\t\t\t  <input type="text" class="form-control input-sm js-card-duetime-edit-' +
((__t = (card.attributes.id)) == null ? '' : __t) +
'" name="due_time" data-format="hh:mm:ss" required />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t  <label for="save" class="sr-only">Save</label>\n\t\t\t\t\t\t\t\t  <input type="submit" value="Save" id="save" class="btn btn-primary" id="submitCardDueDateEditForm">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t';
 if(card.attributes.due_date != null && card.attributes.due_date != '') { ;
__p += '\n\t\t\t\t\t\t\t\t<div class="col-xs-6">\n\t\t\t\t\t\t\t\t  <label for="remove" class="sr-only">Remove</label>\n\t\t\t\t\t\t\t\t  <input type="reset" value="Remove" id="js-remove-due-date" class="btn btn-default">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t ';
 } ;
__p += '\n\t\t\t\t  </li>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t</ul>\n\t\t\t\t<div class="list-group-item-text clearfix">\n\t\t\t\t  <h4 class="text-muted">Description <a href="#" class="';
if(!_.isUndefined(authuser.user)) {;
__p += 'js-show-card-desc-edit-form';
}else{;
__p += 'js-no-action';
};
__p += '" title="Edit">\n\t\t\t\t  ';
if(!_.isUndefined(authuser.user)) {;
__p += '\n\t\t\t\t\t<i class="icon-pencil"></i>\n\t\t\t\t   ';
 } ;
__p += '\n\t\t\t\t  </a></h4>\n\t\t\t\t  ';
 if(!_.isEmpty(card.attributes.description)){ ;
__p += '\n\t\t\t\t  <p class="js-show-card-desc">' +
((__t = ( converter.makeHtml(_.escape(card.attributes.description)) )) == null ? '' : __t) +
'</p>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t   ';
if(!_.isUndefined(authuser.user)) {;
__p += '\n\t\t\t\t  <form class="hide js-card-edit-form" name="cardDescriptionEditForm" id="cardDescriptionEditForm">\n\t\t\t\t\t<div class="form-group required">\n\t\t\t\t\t  <textarea rows="4" id="inputCarddescription" name="description" class="form-control">' +
__e( card.attributes.description ) +
'</textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="submit panel-body">\n\t\t\t\t\t  <input type="submit" value="Save" id="submitCardDescriptionEditForm" class="btn btn-primary">\n\t\t\t\t\t  <a class="js-cancel-card-description-edit"><i class="icon-remove btn btn-link"></i></a> </div>\n\t\t\t\t  </form>\n\t\t\t\t  ';
 };
__p += '\n\t\t\t\t</div>\n\t\t\t\t<div id="js-card-checklists"></div>\n\t\t\t\t';
 if(!_.isEmpty(card.attachments)){ ;
__p += '\n\t\t\t\t<div class="list-group-item-heading clearfix">\n\t\t\t\t  <h3 class="pull-left"> <span class="pull-left"><i class="icon-paper-clip lead"></i></span> Attachment </h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="list-group-item-text clearfix">\n\t\t\t\t  <ul class="list-unstyled clearfix attachment-list" id="js-card-attachments-list"></ul>\n\t\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "add_card_attachment"}))){ ;
__p += '\n\t\t\t\t  <div class="clearfix dropdown"> \n\t\t\t\t  ';
 if(!_.isUndefined(authuser.user)){;
__p += '\n\t\t\t\t  <a class="dropdown-toggle btn-link h4 js-load-dropbox" role="button" data-toggle="dropdown" title="Add an attachment" href="#"> <span class="text-muted panel-title" >Add an attachment</span> </a>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t\t<ul class="dropdown-menu arrow col-xs-3">\n\t\t\t\t\t\t<li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Attach From... </strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t\t<li class="col-xs-12"><a href="#" title="Computer" class="js-attachment-computer-open row">Computer</a></li>\n\t\t\t\t\t\t<li class="col-xs-12"><a href="#" title="Dropbox" class="js-attachment-dropbox-open row">Dropbox</a></li>\n\t\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t\t<li class="col-xs-12">\n\t\t\t\t\t\t  <span class="col-xs-10 sr-only">Attach a Link</span>\n\t\t\t\t\t\t  <form class="js-card-attachment-link-form col-xs-12" method="post" role="form">\n\t\t\t\t\t\t\t<div class="form-group row">\n\t\t\t\t\t\t\t  <input type="url" class="form-control input-sm"  name="image_link" placeHolder="Paste any link here">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group row">\n\t\t\t\t\t\t\t  <input type="submit" value="Submit" id="submit2" class="btn btn-primary btn-sm">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class="help-block row small">Tip: You can drag and drop files and links onto cards to upload them.</span>\n\t\t\t\t\t\t  </form>\n\t\t\t\t\t  </li>\n\t\t\t\t\t</ul>\n\t\t\t\t  </div>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t</div>\n\t  </div>\n\t  <div class="splitter-wrap ui-resizable">\n\t  <div class="inner col-xs-12">\n\t\t<ul class="list-unstyled navbar-btn row">\n\t\t  <li class="list-group-item list-group-item-info clearfix">\n\t\t\t<div class="list-group-item-heading">\n\t\t\t\t  <h3 class="list-group-item-heading">Activity</h3>\n\t\t\t\t</div>\n\t\t\t<div class="list-group-item-text">\n\t\t\t  <ul class="media-list" id="js-board-activities">\n\t\t\t\t';
 if(!_.isUndefined(authuser.user) && !_.isEmpty(role_links.where({slug: "comment_card"}))){ ;
__p += '\n\t\t\t\t<li class="media comment-block"> \n\t\t\t\t  <form method="post" class="form-horizontal js-add-comment">\n\t\t\t\t  <ul class="media-list">\n\t\t\t\t\t\t<li class="media">\n\t\t\t\t\t\t<a data-placement="bottom" title="' +
__e( authuser.user.username ) +
'" data-toggle="tooltip" class="pull-left" href="#/user/' +
__e( authuser.id ) +
'">\n\t\t\t\t  ';
 if(!_.isEmpty(authuser.user.profile_picture_path)) { 
					var profile_picture_path = card.showImage('User', authuser.user.id, 'small_thumb' );
				  ;
__p += '\n\t\t\t\t  <img src="' +
((__t = (profile_picture_path )) == null ? '' : __t) +
'" alt="[Image: ' +
__e(authuser.user.username ) +
']" title="' +
__e(authuser.user.username ) +
'" class="img-rounded img-responsive avatar">\n\t\t\t\t  ';
 } else {;
__p += '\n\t\t\t\t  <i class="avatar avatar-color-194 img-rounded" title="' +
__e(authuser.user.username ) +
'">' +
__e( authuser.user.initials ) +
'</i>\n\t\t\t\t  ';
 } ;
__p += '\n\t\t\t\t  </a>\n\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t  <div class="media-heading clearfix">\n\t\t\t\t\t\t<div class="form-group list-group-item-text">\n\t\t\t\t\t\t\t<div class="col-xs-12 list-group-item-text navbar-right">\n\t\t\t\t\t\t\t\t<label class="sr-only">Comment</label>\n\t\t\t\t\t\t\t\t<textarea class="form-control input-sm js-comment" rows="4" name="comment" placeHolder="Write a comment" required ></textarea>\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="js-new-comment hide clearfix btn-block navbar-btn">\n\t\t\t\t\t<div class="col-xs-11 radio pull-right btn-block">\n\t\t\t\t\t\t<ul class="list-unstyled clearfix col-xs-12">\n\t\t\t\t\t\t<li class="pull-left radio-inline">\n\t\t\t\t\t\t  <div class="clearfix dropdown"> <a class="show dropdown-toggle btn-link btn-xs btn-block" role="button" data-toggle="dropdown" title="Add Card" href="#"> <span class="text-muted show" >Add Card</span> </a>\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow col-xs-3 list-group">\n\t\t\t\t\t\t\t  <li class="col-xs-12 clearfix text-center">\n\t\t\t\t\t\t\t\t<div><span class="col-xs-10"><strong>Add Card</strong></span>\n\t\t\t\t\t\t\t\t<a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t  <li class="col-xs-12 divider"></li>\n\t\t\t\t\t\t\t  <li class="col-xs-12 js_activity_card_search_response">\n\t\t\t\t\t\t\t\t  <div class="clearfix">\n\t\t\t\t\t\t\t\t\t<label class="sr-only">Search Card</label>                            \n\t\t\t\t\t\t\t\t\t  <input type="text" placeholder="Search Card" name="card" class="js-search-card form-control input-sm  js-no-action">\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="dropdown pull-left radio-inline radio">\n\t\t\t\t\t\t  <div class="clearfix dropdown"> <a class="show dropdown-toggle btn-link btn-xs btn-block" role="button" data-toggle="dropdown" title="Mention a member" href="#"> <span class="text-muted show" >Mention a member</span> </a>\n\t\t\t\t\t\t\t<ul class="dropdown-menu arrow col-xs-3">\n\t\t\t\t\t\t\t  <li class="col-xs-12 clearfix text-center"><div><span class="col-xs-10"><strong>Mention a Members</strong></span> <a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div></li>\n\t\t\t\t\t\t\t  <li class="col-xs-12 divider"></li>\n\t\t\t\t\t\t\t  <li class="col-xs-12 js-comment-member-search-response">\n\t\t\t\t\t\t\t\t  <div class="clearfix">\n\t\t\t\t\t\t\t\t\t<label class="sr-only">Search Member</label>\n\t\t\t\t\t\t\t\t\t<input type="text" autocomplete="off" placeholder="Search members" name="member" class="js-search-member form-control input-sm js-no-action">\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t  </ul>\n\t\t\t\t\t<div class="pull-left col-xs-12">\n\t\t\t\t\t  <label class="sr-only" for="submit2">submit</label>\n\t\t\t\t\t  <div class="radio-inline">\n\t\t\t\t\t\t  <input type="submit" id="submitCommentAdd" class="btn btn-primary" value="Comment"/>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  </li>\n\t\t\t\t  </ul>\n\t\t\t\t </form>\n\t\t\t\t  \n\t\t\t\t</li>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t<li> </li>\n\t\t\t\t<li class="col-xs-12 divider"><hr></li>\n\t\t\t  </ul>\n\t\t\t  <div class="text-center clearfix hide" id="js-loader-img"><img src="img/select2-spinner.gif" alt="[Images:Loader]" title="Loading ..." /></div>\n\t\t\t  <ul class="media-list col-xs-12 clearfix btn-block" id="js-card-activities-' +
((__t = ( card.attributes.id)) == null ? '' : __t) +
'">\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t\t</li>\n\t\t  </ul>\n\t\t</div>\n\t  </div>\n  </div>\n  <div class="drag-drop">Drop Files Here</div>\n    \n  </div>\n  <!-- Side Menu block start -->\n  ';
if(!_.isUndefined(authuser.user)) {;
__p += '\n  <div class="dropdown dockheader-dropdown docmodal-submenu">\n  <a aria-expanded="true" data-toggle="dropdown" id="dropdownMenu1" class="dropdown-toggle label"> <i class="icon-cog h3"></i></a>\n  <ul role="menu" class="dropdown-menu arrow">\n\t  <li class="dropdown-submenu dropdown"> \n\t\t<a href="#" title="Add" class="dropdown-toggle js-open-popover" data-toggle="dropdown" >Add</a>\n\t\t<ul class="dropdown-menu">\n\t\t<li class="dropdown"> <a class="dropdown-toggle js-show-card-due-date-form" role="button" data-toggle="dropdown" title="Due date" href="#">Due date</a>\n\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t<li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Due date</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t<li class="js-show-card-due-date-form-response col-xs-12"> </li>\n\t\t  </ul>\n\t\t</li>\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "add_card_user"}))){ ;
__p += '\n\t\t\t<li class="dropdown"><a data-toggle="dropdown" class="dropdown-toggle js-show-add-member-form js-card-header-action" title="Members" href="#">Members</a>\n\t\t\t\t  <ul class="dropdown-menu arrow">\n\t\t\t\t\t<li class="col-xs-12 text-center clearfix">\n\t\t\t\t\t  <div><span class="col-xs-10"><strong>Members</strong></span> <a href="#" class="js-close-popover pull-right"><i class="icon-remove"></i></a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t<li class="col-xs-12">\n\t\t\t\t\t  <form method="post" class="text-center" name="addMember">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t  <label class="sr-only">Search Member</label>\n\t\t\t\t\t\t  <input type="text" autocomplete="off" id="inputOrganizationUserSearch" placeholder="Search members" name="email" required class="js-search-users form-control input-sm">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </form>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="clearfix js-organization-member-search-response col-xs-12 small"> Search for a person in ' +
__e( SITE_NAME ) +
' by name or email address. </li>\n\t\t\t\t  </ul>\n\t\t\t</li>\n\t\t';
 } ;
__p += '\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "add_labels"}))){ ;
__p += '\n\t\t\t<li class="dropdown"> <a class="dropdown-toggle js-show-card-label-form js-card-header-action" role="button" data-toggle="dropdown" title="Labels" href="#">Labels</a>\n\t\t\t\t<ul class="dropdown-menu dropdown-menu-left arrow col-xs-12 js-show-card-label-form-response">\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t';
 } ;
__p += '\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "add_checklists"}))){ ;
__p += '\n\t\t    <li class="dropdown"> <a class="dropdown-toggle js-show-checklist-add-form" role="button" data-toggle="dropdown" title="Checklist" href="#">Checklist</a>\n\t\t      <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t\t<li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Add Checklist</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t        <li class="col-xs-12 divider"></li>\n\t\t\t\t<li class="col-xs-12 js-checklist-add-form-response"> </li>\n\t\t      </ul>\n\t\t    </li>\n\t    ';
 } ;
__p += '\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_card"}))){ ;
__p += '\n\t\t\t<li class="dropdown"> <a class="js-show-side-card-title-edit-form" role="button" data-toggle="dropdown" title="Checklist" href="#">Info</a>\n\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t\t<li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Edit Card Info</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t<li class="col-xs-12 js-show-side-card-title-edit-form-response">\n\t\t\t\t  <form class="js-card-edit-form" method="POST">\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <label for="cardTitle' +
__e( card.id) +
'">Title</label>\n\t\t\t\t\t  <input type="text" class="form-control" id="cardTitle' +
__e( card.id) +
'" name="name" data-format="hh:mm:ss" value="' +
__e( card.attributes.name ) +
'" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <label for="cardDescription' +
__e( card.id) +
'">Description</label>\n\t\t\t\t\t  <textarea name="description" rows="3" class="form-control" id="cardDescription' +
__e( card.id) +
'">' +
__e( card.attributes.description ) +
'</textarea>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t  <div class="col-xs-6 nav">\n\t\t\t\t\t\t<label for="save" class="sr-only">Save</label>\n\t\t\t\t\t\t<input type="submit" value="Save" id="save" class="btn btn-primary" id="submitCardInfoEditForm">\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\t\t\t\t</li>\n\t\t\t  </ul>\n\t\t\t</li>\n\t\t\t';
 } ;
__p += '\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "add_card_attachment"}))){ ;
__p += '\n\t\t\t<li class="dropdown"> <a class="dropdown-toggle js-load-dropbox js-card-header-action" role="button" data-toggle="dropdown" title="Attachment" href="#">Attachment</a>\n\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t   <li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Attach From... </strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t<li class="col-xs-12"><a href="#" title="Computer" class="js-attachment-computer-open row">Computer</a></li>\n\t\t\t\t<li class="col-xs-12"><a href="#" title="Dropbox" class="js-attachment-dropbox-open row">Dropbox</a></li>\n\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t<li class="col-xs-12">\n\t\t\t\t  <span class="col-xs-10 sr-only">Attach a Link</span>\n\t\t\t\t  <form class="js-card-attachment-link-form col-xs-12" method="post" role="form">\n\t\t\t\t\t<div class="form-group row">\n\t\t\t\t\t  <input type="url" class="form-control input-sm"  name="image_link" placeHolder="Paste any link here">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group row">\n\t\t\t\t\t  <input type="submit" value="Submit" id="submit2" class="btn btn-primary btn-sm">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class="help-block row small">Tip: You can drag and drop files and links onto cards to upload them.</span>\n\t\t\t\t  </form>\n\t\t\t\t</li>\n\t\t\t  </ul>\n\t\t\t</li>\n\t\t\t';
 } ;
__p += '\n\t\t</ul>\n\t  </li>\n\t  <li class="dropdown-submenu dropdown"> <a href="#" title="Actions" class="dropdown-toggle js-open-popover" data-toggle="dropdown">Actions</a>\n\t\t  <ul class="dropdown-menu">\n\t\t\t<li class="dropdown"> <a class="dropdown-toggle js-show-move-card-form js-card-header-action" role="button" data-toggle="dropdown" title="Move " href="#">Move</a>\n\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t\t<li class="col-xs-12 clearfix text-center"><div> <span class="col-xs-10"><strong>Move Card</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div></li>\n\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t<li class="col-xs-12">\n\t\t\t\t  <form role="form" class="js-move-card" name="MoveCardForm" id="MoveCardForm">\n\t\t\t\t\t<div class="js-show-move-card-form-response"> </div>\n\t\t\t\t\t<div class="form-group clearfix panel-body">\n\t\t\t\t\t  <label class="sr-only">Move</label>\n\t\t\t\t\t  <input type="submit" id="submitListMove" class="btn btn-primary col-xs-12" value="Move" />\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\t\t\t\t</li>\n\t\t\t  </ul>\n\t\t\t</li>\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "copy_card"}))  && !is_offline_data){ ;
__p += '\n\t\t\t\t<li class="dropdown js-hide-on-offline"> <a class="dropdown-toggle js-show-copy-card-form" role="button" data-toggle="dropdown" title="Copy" href="#">Copy</a>\n\t\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow col-xs-12 pre-scrollable vertical-scrollbar">\n\t\t\t\t\t<li class="col-xs-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Copy Card</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t<li class="col-xs-12">\n\t\t\t\t\t  <form role="form" method="post" class="js-copy-card">\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t  <label for="card-title">Title</label>\n\t\t\t\t\t\t  <textarea id="card-title" class="form-control" rows="4" name="name">' +
__e( card.attributes.name) +
'</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="js-show-copy-card-form-response"> </div>\n\t\t\t\t\t\t<div class="form-group clearfix panel-body">\n\t\t\t\t\t\t  <label class="sr-only">Create card</label>\n\t\t\t\t\t\t  <input type="submit" class="btn btn-primary col-xs-12" value="Create card">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </form>\n\t\t\t\t\t</li>\n\t\t\t\t  </ul>\n\t\t\t\t</li>\n\t\t\t';
 } ;
__p += '\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "subscribe_card"}))){ ;
__p += '\n\t\t\t    <li> <a class="';
 if(!_.isEmpty(cards_subscribers)){;
__p += ' js-card-unsubscribe ';
 } else {;
__p += 'js-card-subscribe ';
 };
__p += '" title=" Subscribe " href="">Subscribe\n\t\t       ';
 if(!_.isEmpty(cards_subscribers)){ ;
__p += '\n\t\t\t    <i class="icon-ok"></i>\n\t\t      ';
 } ;
__p += '\n\t\t      </a> \n\t\t\t  </li>\n\t\t   ';
 } ;
__p += '\n\t\t   ';
 if(!_.isEmpty(role_links.where({slug: "vote_card"})) || !_.isEmpty(role_links.where({slug: "unvote_card"}))){ ;
__p += '\n\t\t    <li>\n\t\t      ';
 if(!_.isUndefined(authuser) && !_.isUndefined(authuser.user)){
					var voted_user = card.card_voters.findWhere({
					 user_id: parseInt(authuser.user.id)
					}); 
				
			;
__p += '\n\t\t      ';
 if(_.isEmpty(voted_user)){  ;
__p += '\n\t\t      ';
 if(!_.isEmpty(role_links.where({slug: "vote_card"}))){ ;
__p += '\n\t\t      <a class="panel-heading show js-add-card-vote" title="Vote" href="#">Vote</a>\n\t\t\t  ';
 } ;
__p += '\n\t\t\t  ';
 } else{ ;
__p += '\n\t\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "unvote_card"}))){ ;
__p += '\n\t\t\t  <a class="panel-heading show js-delete-card-vote"" title="Unvote" href="#" data-id="' +
__e( voted_user.id ) +
'"> <span class="text-muted show panel-title" ><i class="icon-thumbs-up-alt"></i> Unvote </span> </a>\n\t\t\t  ';
 } ;
__p += '\n\t\t\t  ';
 } };
__p += '\n\t\t\t</li>\n\t\t ';
 } ;
__p += '\n\t\t\t<li> <a class="panel-heading show ';
 if(card.attributes.is_archived == false){ ;
__p += 'js-archive-card';
 }else{ ;
__p += ' js-card-send-to-board';
 } ;
__p += '" title="';
 if(card.attributes.is_archived == false){;
__p += 'Archive';
 }else{ ;
__p += 'Send to board';
};
__p += '" href="">\n\t\t      ';
 if(card.attributes.is_archived == false){ ;
__p += '\n\t\t\t      Archive\n\t\t      ';
 }else{ ;
__p += '\n\t\t\t\t  Send to board\n\t\t      ';
 } ;
__p += '\n\t\t\t\t</a> \n\t\t\t</li>\n\t\t    ';
 if(card.attributes.is_archived == true && !_.isEmpty(role_links.where({slug: "delete_card"}))){ ;
__p += '\n\t\t\t<li >\n\t\t\t  <ul class="list-unstyled panel-body">\n\t\t\t\t<li class="dropdown"> <a class="col-xs-12 btn btn-primary whitec dropdown-toggle js-open-dropdown" href="#" data-toggle="dropdown"> <span><i class="icon-archive"></i></span> <span>Delete</span> </a>\n\t\t\t\t  <ul class="dropdown-menu dropdown-menu-left arrow">\n\t\t\t\t\t<li class="js-dropdown-popup dropdown-popup">\n\t\t\t\t\t  <div class="clearfix text-center col-xs-12"> <span class="col-xs-10"><strong>Delete Card?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a> </div>\n\t\t\t\t\t  <div class="col-xs-12 divider"></div>\n\t\t\t\t\t  <div class="col-xs-12">\n\t\t\t\t\t\t<p>All actions will be removed from the activity feed and you won\\\'t be able to reopen the card. There is no undo. You can archive a card to remove it from the board and preserve the activity. </p>\n\t\t\t\t\t\t<a class="js-delete-card btn  btn-primary" title="Delete">Delete</a> </div>\n\t\t\t\t\t</li>\n\t\t\t\t  </ul>\n\t\t\t\t</li>\n\t\t\t  </ul>\n\t\t\t</li>\n\t\t\t';
 } ;
__p += '\n\t\t  </ul>\n\t  </li>\n\t  <li class="dropdown js-more-dropdown">\n\t  <div class="col-xs-12 divider"></div>\n\t  <a class="show btn btn-link js-more-menu quiet-button" data-toggle="dropdown" title="More options share, print, export, and delete." href="#"> Share and more...</a>\n\t\t<ul class="dropdown-menu dropdown-menu-left arrow col-xs-12">\n\t\t\t<li class="col-xs-12 clearfix text-center"><div> <span class="col-xs-10"><strong>More</strong></span> <a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div></li>\n\t\t\t<li class="col-xs-12 divider"></li>       \n\t\t\t<li class="col-xs-12">\n\t\t\t  <p class="text-muted"> <span class="show"> Card #' +
__e( card.attributes.id ) +
' </span> <span class="show">Link to this card</span> </p>\n\t\t\t  <form role="form">\n\t\t\t\t<div class="form-group">\n\t\t\t\t  <input type="text" value="' +
((__t = ( window.location.origin )) == null ? '' : __t) +
'' +
((__t = ( window.location.pathname )) == null ? '' : __t) +
'#/board/' +
__e( card.attributes.board_id ) +
'/card/' +
__e( card.attributes.id ) +
'" class="form-control input-sm js-select-card-url" readonly="readonly">\n\t\t\t\t</div>\n\t\t\t  </form>\n\t\t\t</li>\n\t\t </ul>\n\t  </li>\n  </ul>\n  </div>\n  ';
};
__p += '\n  <!-- Side Menu block end -->\n</section>\n';

}
return __p
};

this["JST"]["templates/modal_flickr_photo_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="modalFlickrPhoto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t  <div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t  <button type="button" class="close js-close-popover" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t  <h4 id="myModalLabel" class="modal-title"><strong>Background Photo</strong></h4>\n\t\t\t</div>\t\t\t\n\t\t\t<div class="modal-body clearfix">\t\n\t\t\t\t<div class="navbar-btn col-xs-4 nav">\n\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t<input type="text" class="form-control input-sm js-flickr-search" placeholder="Search">\n\t\t\t\t\t\t<span class="input-group-btn"><button class="btn btn-primary input-sm btn-sm js-flickr-search-box" type="button"><i class="icon-search cur"></i></button></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="pull-right h4"><small class="navbar-btn">Powered by <a href="javascript:void(0);" title="Flickr"><strong class="text-primary">Flickr</strong></a></small></div>\n\t\t\t\t<div class="col-xs-12 h4 btn-block">\n\t\t\t\t<ul class="list-inline clearfix" id="js-flickr-background-photos">\n\t\t\t\t \n\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class="h4 btn-block pull-left text-center js-flickr-loader-and-more"><a href="javascript:void(0);" class="btn-link js-flickr-loadmore">Load More</a></div>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t  </div><!-- /.modal-content -->\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/modal_list_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="modalListView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\t<div class="modal-dialog modal-lg">\n\t\t  <div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t  <h4 id="myModalLabel" class="modal-title"><strong>' +
__e( list.attributes.name ) +
'</strong></h4>\n\t\t\t</div>\t\t\t\n\t\t\t<div class="modal-body clearfix">\t\n\t\t\t\t<ul class="list-unstyled clearfix col-xs-12 btn-block" id="js-list-attachments-list"><li><span class="cssloader"></span></li></ul>\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t  </div><!-- /.modal-content -->\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/modal_music_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal fade" id="modalMusic" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t  <div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t  <button type="button" class="close js-close-popover" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t  <h4 id="myModalLabel" class="modal-title"><strong>Productivity Beats</strong></h4>\n\t\t\t</div>\t\t\t\n\t\t\t<div class="modal-body clearfix">\t\t\t\t\t\n\t\t\t\t<div class="col-xs-12 h4 btn-block">\n\t\t\t\t\t<form class="form-horizontal" name="musicUpdate" id="js-MusicForm">\t\t\t\t\t\t\n\t\t\t\t\t  <div class="form-group input text required">\n\t\t\t\t\t\t<label for="title" class="sr-only">Name</label>\n\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t  <input type="text" class="form-control js-music_name" id="title" placeholder="Name" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  <div class="form-group required">\n\t\t\t\t\t\t<label class="sr-only">abc Notation</label>\n\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t  <textarea class="form-control js-music_content" rows="3" placeholder="abc Notation" required></textarea>\n\t\t\t\t\t\t  <div>\n\t\t\t\t\t\t\t<span class="help-block">\n\t\t\t\t\t\t\t\tEnter abc music notation. May choose from <a href="http://reissendewoelfe.de/abc/" target="_blank">Reissende Woelfe Collections</a>, <a href="http://abcnotation.com/" target="_blank">abcnotation</a>, or <a href="http://www.lotro-abc.com/" target="_blank">Lotro ABC</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t<label for="submit2" class="col-sm-1 control-label sr-only">submit</label>\n\t\t\t\t\t\t\t<input type="submit" value="Submit" id="js-music_add" class="btn btn-primary btn-lg">\n\t\t\t\t\t\t</div>\t\t\t\t\t  \n\t\t\t\t\t</form>\t\t\t\t\n\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\n\t\t\t</div>\n\t\t  </div><!-- /.modal-content -->\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/modal_user_activities_list_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal fade" id="modalUserActivitiesListView" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t  <div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t<span class="col-xs-10"><strong>';
 if(!_.isEmpty(list.attributes.full_name)) { ;
__p +=
__e( list.attributes.full_name );
 } else { ;
__p +=
__e( list.attributes.username );
 } ;
__p += '</span><span> ( ' +
__e( list.attributes.username ) +
' ) </strong></span>\n\t\t\t  <button type="button" class="close pull-right" data-dismiss="modal" aria-hidden="true">&times;</button>\t\t\t  \n\t\t\t</div>\t\t\t\n\t\t\t<div class="modal-body scrollbar">\n\t\t\t\t<div>\n\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t<ul class="clearfix list-unstyled" id="js-list-user-activities-list"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div><!-- /.modal-content -->\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/move_card"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


var content_board = '<div class="form-group clearfix"><select name="board_id" class="js-change-list col-xs-12 form-control input-sm cur">';
var content_list = '<div class="form-group clearfix"><select name="list_id" class="js-change-position col-xs-12 form-control input-sm cur">';
var content_position = '<div class="form-group clearfix"><select name="position" class="js-position col-xs-12 form-control input-sm cur">';
card.list.cards.sortByColumn('position');
var current_position = card.list.cards.indexOf(card.list.cards.get(card.attributes.id)) + 1;
if(current_position == 0){
	current_position = 1;
}
boards.each(function(board) {
	if (card.attributes.board_id == board.id) {
		content_board += '<option value="' + board.id + '" selected="selected">' + _.escape(board.attributes.name) + ' (current)</option>';
		//board.lists.add(board.attributes.lists);
		var filtered_lists = board.lists.where({
			is_archived: false,
			board_id: card.attributes.board_id
		});
		_.each(filtered_lists, function(list) {
		
			if (card.attributes.list_id == list.id) {
				content_list += '<option value="' + list.id + '" selected="selected">' + _.escape(list.attributes.name) + ' (current)</option>';
				for(var i = 1; i <= list.attributes.card_count; i++){
					if (card.attributes.list_id == list.attributes.id && i == current_position) {
						content_position += '<option value="' + i + '" selected="selected">' + i + ' (current)</option>';
					} else {
						content_position += '<option value="' + i + '">' + i+ '</option>';
					}
				}
				if (card.attributes.list_id != list.attributes.id) {
				    var next_position = parseInt(list.attributes.card_count ) + 1;
					content_position += '<option value="' + next_position + '">' + next_position+ '</option>';
				}
				
			} else {
				content_list += '<option value="' + list.id + '">' + _.escape(list.attributes.name) + '</option>';
			}

		});
	} else {
		if(board.attributes.is_closed == false || board.attributes.is_closed == 'f'){
			content_board += '<option value="' + board.id + '">' + _.escape(board.attributes.name) + '</option>';
		}
	}

});
content_board += '</select></div>';
content_list += '</select></div>';
content_position += '</select></div>';
var content = content_board + content_list + content_position;
;
__p += '\n' +
((__t = ( content )) == null ? '' : __t);

}
return __p
};

this["JST"]["templates/move_cards_from_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 
	var list_li = '';
	_.each(filtered_lists, function(filtered_list) {
		 if (filtered_list.id == list.attributes.id) {
			 list_li += '<li class="disabled navbar-btn"><a href="#" class="js-no-action text-muted">' + _.escape(filtered_list.attributes.name) + ' (Current)</a></li>';
		 } else {
			 list_li += '<li class="navbar-btn"><a href="#" class="js-move-cards js-close-popup" data-move-list-id="' + filtered_list.id + '">' + _.escape(filtered_list.attributes.name) + '</a></li>';
		 }
	 });
;
__p += '\n<li class="clearfix text-center col-xs-12">\n\t<div class="clearfix">\n\t<a href="#" class="js-back-to-list-actions pull-left" data-list-id="' +
__e( list.id) +
'"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Move All Cards in List</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove"></i></a>\n\t</div>\t\n</li>\n<li class="col-xs-12 divider"></li>\n' +
((__t = ( list_li)) == null ? '' : __t);

}
return __p
};

this["JST"]["templates/move_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


var content_board = '<div class="form-group clearfix col-xs-12"><select name="board_id" class="js-move-change-list col-xs-12 form-control input-sm cur">';
var content_position = '<div class="form-group clearfix col-xs-12"><select name="list_id" id="list_position" class="js-move-change-position col-xs-12 form-control input-sm cur">';
var board_lists = new App.ListCollection();
board_lists.sortByColumn('position');
var current_position = board_lists.indexOf(board_lists.findWhere({id: list.attributes.id})) + 1;
if(current_position == 0){
	current_position = 1;
}
boards.each(function(board) {
	if (list.attributes.board_id == board.id) {
		var list_count = board.lists.where({is_archived: false, is_deleted: false}).length;
		content_board += '<option value="' + board.id + '" selected="selected">' + _.escape(board.attributes.name) + ' (current)</option>';
		for(var i = 1; i <= list_count; i++) {
			if (i == list.attributes.position) {
				content_position += '<option value="' + i + '" selected="selected">' + i + ' (current)</option>';
			} else {
				content_position += '<option value="' + i + '">' + i+ '</option>';
			}
		}
		if (list.attributes.board_id != board.attributes.id) {
			var next_position = parseInt(list_count) + 1;
			content_position += '<option value="' + next_position + '">' + next_position+ '</option>';
		}
	} else {
		if (board.attributes.is_closed == false || board.attributes.is_closed == 'f') {
			content_board += '<option value="' + board.id + '">' + _.escape(board.attributes.name) + '</option>';
		}
	}

});
content_board += '</select></div>';
content_position += '</select></div>';
var content = content_board + content_position;
;
__p += '\n<div class="clearfix text-center col-xs-12"><a data-list-id="268" class="js-back-to-list-actions pull-left" href="#"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Move List</strong></span><a class="js-close-popup pull-right" href="#"><i class="icon-remove"></i></a></div><div class="col-xs-12 divider"></div>\n<form role="form" class="js-move-list" name="MoveListForm" id="MoveListForm">\n' +
((__t = ( content )) == null ? '' : __t) +
'\n  <div class="form-group clearfix panel-body">\n\t<label class="sr-only">Move</label>\n\t<input type="submit" id="submitListMove" class="btn btn-primary col-xs-12" value="Move" />\n  </div>\n</form>';

}
return __p
};

this["JST"]["templates/my_boards_listing"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board != null){	
	var style = '';	
	board.board_subscribers.add(board.attributes.boards_subscribers);
	var subscriber = board.board_subscribers.findWhere({
	board_id: parseInt(board.id),
	user_id: parseInt(authuser.user.id)
	});
	if (board.attributes.background_picture_url) {
		var background_picture_url = board.attributes.background_picture_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_picture_url + '); background-size:cover;';
	} else if (board.attributes.background_pattern_url) {
		var background_pattern_url = board.attributes.background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_pattern_url + '); background-size:cover;';
	} else if (board.attributes.background_color){
		style = 'background-color:' + board.attributes.background_color + ';color:#ffffff;';
	}
;
__p += '\n<a  href="#/board/' +
__e( board.attributes.id ) +
'" class="highlight-icon clearfix">\n\t<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t<span class="details navbar-btn">\n\t\t<span title="' +
__e( board.attributes.name ) +
'" class="board-list-item-name htruncate btn-block navbar-btn ">' +
__e(  board.attributes.name ) +
'</span><span class="pull-right hide js-stared-conatiner js-stared-conatiner-' +
__e( board.attributes.id ) +
'">\n\t\t\t';

				if (!_.isUndefined(subscriber) && !_.isEmpty(subscriber) && subscriber.attributes.is_subscribe === false) {
			;
__p += '\n\t\t\t\t<span title="Click to star this board. It will show up at top of your boards list." name="unsubscribe" class="icon-star js-star-board" data-subscriber_id="' +
__e( subscriber.attributes.id ) +
'" data-board_id="' +
__e( board.attributes.id ) +
'"></span>\n\t\t  ';

			} else {
		  ;
__p += '\n\t\t\t\t<span title="Click to star this board. It will show up at top of your boards list." name="subscribe" class="icon-star-empty js-star-board" data-subscriber_id="';
 if(_.isUndefined(subscriber) || _.isEmpty(subscriber)) { ;
__p += '  ';
} else { ;
__p += ' ' +
__e(subscriber.id) +
' ';
} ;
__p += '" data-board_id="' +
__e( board.attributes.id ) +
'"></span>\n\t\t';
		
			}
		;
__p += '\n\t\t\n\t\t</span>\n\t</span>\n</a>\n';
 }else{ ;
__p += '\n <div class="alert alert-info">\n\tNo boards available.\n</div>\n';
};
__p += '\t\n\t\t\n  ';

}
return __p
};

this["JST"]["templates/notification_menu"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li><a href="#" class="js-all-activities">All</a></li>\n<li><a href="#" class="js-board-activities">In this board</a></li>';

}
return __p
};

this["JST"]["templates/organization_add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center col-xs-12">\n\t<a href="#" class="js-show-organizations-board-from pull-left"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Create Organization</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></span></h4>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<form name="OrganizationAddForm" id="OrganizationAddForm">\n\t\t<div class="form-group required">\n\t\t\t<label for="inputOrganizationName">Name</label>\n\t\t\t<input class="form-control input-sm" type="text" maxlength="255" id="inputOrganizationName" name="name" required>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<label for="inputOrganizationDescription">Description</label>\n\t\t\t<textarea class="form-control" type="textarea" id="inputOrganizationDescription" name="description"></textarea>\n\t\t</div>\n\t\t<div class="form-group">\n\t\t\t<input type="submit" value="Add" id="js-add-organization" class="btn  btn-primary">\n\t\t</div>\n\t\t<p>An organization is a group of boards and members.</p>\n\t\t</form>\n</div>';

}
return __p
};

this["JST"]["templates/organization_board"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board != null){ ;
__p += '\n<div class="panel">\n\t<div class="panel-body bg-warning">\n\t\t<div class="clearfix">\n\t\t\t<h4 class="col-md-9 col-sm-8 col-xs-9 navbar-btn">\n\t\t\t\t<span class="show row navbar-btn">\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t<a class="htruncate btn-block" href="#/board/' +
__e( board.id ) +
'" title="' +
__e( board.attributes.name ) +
'">' +
__e( board.attributes.name) +
'</a>\n\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t' +
__e( board.attributes.name) +
'\t\t\t\t\t\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</span>\n\t\t\t</h4>\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t<span class="pull-right dropdown">\n\t\t\t\t\t<a href="#" class="js-board-visibility text-muted h5 show" data-toggle="dropdown">\n\t\t\t\t\t\t';
 if(board.attributes.board_visibility == 0) { ;
__p += '\n\t\t\t\t\t\t\t<span title="Private" class="icon-lock col-lg-2 text-primary"></span>\n\t\t\t\t\t\t';
 } else if(board.attributes.board_visibility == 1) { ;
__p += ' \n\t\t\t\t\t\t\t<span title="Organization" class="icon-group col-lg-2 text-primary"></span>\n\t\t\t\t\t\t';
 } else if(board.attributes.board_visibility == 2) { ;
__p += '\n\t\t\t\t\t\t\t<span title="Public" class="icon-circle col-lg-2 text-primary"></span>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t<li class="js-visibility-popup js-dropdown-popup dropdown-popup">\n\t\t\t\t\t\t\t<div class="clearfix text-center col-xs-12">\n\t\t\t\t\t\t\t  <a class="js-back-to-board-visibility hide pull-left" href="#"><i class="icon-caret-left"></i></a>\n\t\t\t\t\t\t\t  <span class="col-xs-10"><strong>Change Visibility</strong></span><a class="js-close-span-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="col-xs-12 divider js-visibility-list"></li>\n\t\t\t\t\t</ul> \n\t\t\t\t</span>\n\t\t\t';
 } ;
__p += '\n\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t';
 if(!_.isEmpty(stared)){ ;
__p += '\n\t\t\t\t\t<a title="Unstar" href="#" class="h5 pull-right js-star-board" name="unstar"><i class="icon-star  text-primary"></i></a>\n\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t<a title="Star" href="#" class="h5 pull-right js-star-board" name="star"><i class="icon-star-empty"></i></a>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t';
 } ;
__p += '\n\t  </div>\n\t  <div class="js-board-inner-view"></div>\n\t\t<ul class="list-unstyled chart-block">\n\t\t';
 
		var style = '';			
		if (board.attributes.background_picture_url) {
			var background_picture_url = board.attributes.background_picture_url.replace("_XXXX.jpg", "_n.jpg");
			style = 'background:url(' + background_picture_url + ') 25% 25%; background-size: cover';
		} else if (board.attributes.background_pattern_url) {
			var background_pattern_url = board.attributes.background_pattern_url.replace("_XXXX.jpg", "_n.jpg");
			style = 'background:url(' + background_pattern_url + ') repeat scroll 0% 0%;';
		} else if (board.attributes.background_color){
			style = 'background:' + board.attributes.background_color;
		}
		;
__p += '\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t<li class="list-group-item clearfix" style="' +
((__t = ( style )) == null ? '' : __t) +
'">\n\t\t\t\t<a class="show" href="#/board/' +
__e( board.id ) +
'">\n\t\t\t\t\t<div id="doughnutChart" class="chart js-chart"></div>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t';
 } else { ;
__p += '\n\t\t\t<li class="list-group-item clearfix" style="' +
((__t = ( style )) == null ? '' : __t) +
'">\n\t\t\t\t\t<div id="doughnutChart" class="chart js-chart"></div>\n\t\t\t</li>\n\t\t';
 } ;
__p += '\n\t\t</ul>\n\t</div>\n</div>\n';
 }else{ ;
__p += '\n\t<div class="alert alert-info">\n\tNo boards available.\n</div>\n';
};


}
return __p
};

this["JST"]["templates/organization_delete_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 text-center clearfix">\t\n\t<span class="col-xs-10"><strong>Delete Organization?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<ul class="list-unstyled">\n\t\t<li class="text-left">\n\t\t\t\t<span class="show">Deleting an Organization is permanent. There is no undo.</span>\n\t\t\t\t<div class="col-xs-12 btn-block navbar-btn">\n\t\t\t\t\t<a class="js-delete-organization" title="Delete Organization"><span class=" btn btn-primary">Delete</span></a>\n\t\t\t\t</div>\n\t\t</li>\n\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/organization_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  <div class="container-fluid">\n\t<div class="navbar-left navbar-btn col-sm-11 col-xs-10 nav  col-lg-5 col-md-4">\n\t\t<div class="clearfix navbar-btn row-flex">\n\t\t\t<h2 class="navbar-left navbar-btn col-flex col-flex1"><span class="navbar-left"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a></span></h2>\n\t\t\t<ul class="list-inline navbar-left h3 navbar-btn navbar-form text-center col-flex col-flex2">\n\t\t\t\t<li>\n\t\t\t\t\t<span class=" pull-left h4 navbar-btn">/</span>\n\t\t\t\t\t<span class="text-muted h4 navbar-btn htruncate col-xs-10 list-group-item-heading list-group-item-text text-left">' +
__e( organization.attributes.name ) +
'</span></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t';
 if(!_.isUndefined(authuser.user)){;
__p += '\n  <div class="navbar-right navbar-btn">\n\t<ul class="nav nav-pills navbar-left">\n\t';
 if(!_.isEmpty(role_links.where({slug: "delete_organization"}))){ ;
__p += '\n\t  <li class="dropdown navbar-btn">\n\t\t\t<a href="#" title="Delete" class="text-muted initialism dropdown-toggle" data-toggle="dropdown"><i class="icon-trash"></i></a>\n\t\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled">\n\t\t\t\t\t<li class="col-xs-12 text-center clearfix">\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="clearfix"><span class="col-xs-10"><strong>Delete Organization?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="col-xs-12 divider"></li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class="js-delete-organization show clearfix small well-xs" href="#">\n\t\t\t\t\t\t\t<span class="show text-primary col-xs-12 navbar-btn h5">Remove from organization</span>\n\t\t\t\t\t\t\t<span class="col-xs-12 navbar-btn">Deleting an organization is permanent. Are you sure you want to delete this organization? There is no undo. Boards with this organization won\'t be deleted. Your boards in this organization will appear in your personal boards list.</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\t\t\t\t\t\n\t\t\t</ul>\n\t\t</li>\n\t';
 } ;
__p += '\t\t  \n\t  ';
 if(!_.isEmpty(role_links.where({slug: "edit_organization"}))){ ;
__p += '\n\t\t  <li class="dropdown navbar-btn">\n\t\t\t<a href="#" title="Edit" class="text-muted dropdown-toggle" data-toggle="dropdown"><span class="icon-pencil"></span></a>\n\t\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled list-inline clearfix pull-right">\n\t\t\t\t<li class="js-dropdown-popup dropdown-popup btn-block">\n\t\t\t\t\t<div class="js-organization-edit-block col-xs-12">\n\t\t\t\t\t\t<form name="OrganizationEditForm" id="OrganizationEditForm"> \n\t\t\t\t\t\t\t<div class="form-group required">\n\t\t\t\t\t\t\t\t<label for="inputOrganizationName">Name</label>\n\t\t\t\t\t\t\t\t<input type="text" id="inputOrganizationName" maxlength="255" name="name" class="form-control input-sm" value="' +
__e( organization.attributes.name ) +
'" required />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="inputOrganizationWebsite">Website</label>\n\t\t\t\t\t\t\t\t<input type="text" id="inputOrganizationWebsite" name="website_url" class="form-control input-sm" value="' +
((__t = ( organization.attributes.website_url )) == null ? '' : __t) +
'" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="inputOrganizationDescription">Description</label>\n\t\t\t\t\t\t\t\t<textarea type="textarea" id="inputOrganizationDescription" class="form-control" name="description">' +
__e( organization.attributes.description ) +
'</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="submit">\n\t\t\t\t\t\t\t\t<input type="submit" value="Save" id="js-edit-organization" class="btn btn-primary" />\n\t\t\t\t\t\t\t\t<input type="button" class="js-close-popover btn btn-default" value="Cancel" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\t\n\t\t  </li>\n\t  ';
 } ;
__p += '\n\t  <li class="dropdown navbar-btn">\n\t\t<a href="" title="';
 if(organization.attributes.organization_visibility == 1){ ;
__p += 'Public';
 } else { ;
__p += 'Private';
 } ;
__p += '" class="js-org-visibility-name js-show-organization-visibility-form text-muted dropdown-toggle" data-toggle="dropdown"><span class="js-org-visibility-icon ';
 if(organization.attributes.organization_visibility == 1){ ;
__p += 'icon-circle ';
 } else { ;
__p += 'icon-lock';
 } ;
__p += ' text-muted"></span><span class="h4 js-org-visibility-type">';
 if(organization.attributes.organization_visibility == 1){ ;
__p += 'Public';
 } else { ;
__p += 'Private';
 } ;
__p += '</span></a>\n\t\t<ul class="dropdown-menu arrow arrow-right list-unstyled clearfix pull-left js-organization-visibility">\n\t\t\t\n\t\t</ul>\n\t  </li>\n\t</ul>\n\t</div>\n';
 } ;


}
return __p
};

this["JST"]["templates/organization_member_confirm_remove_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 text-center clearfix">\t\n\t<span class="col-xs-10"><strong>Leave organization</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n\t<ul class="list-unstyled">\n\t\t<li>\n\t\t\t<a class="js-delete-organization-member" data-organizations_user_id="' +
__e( organization_users.organizations_user_id ) +
'" href="#">\n\t\t\t\t<span class="show"> Remove all access to the organization.  The member will remain on all their boards in this organization. They will receive a notification.</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/organization_member_permission_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	var change_normal = '';
	var change_admin = '';
	if (organization_user.collection.where({
		is_admin: true
	}).length > 1) {
		change_normal = 'navbar-btn h6 js-edit-organization-member-permission-to-normal';
	} else  {
		change_admin = 'navbar-btn h6 js-edit-organization-member-permission-to-admin';
	}
;
__p += '\n<li class="col-xs-12 text-center clearfix">\n\t<div class="clearfix">\n\t\t<span class="col-xs-10"><strong>Change Permissions</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t</div>\n</li>\n<li class="divider col-xs-12 btn-block"></li>\n<li class="col-xs-12 btn-block">\n\t';
				
		if(!_.isEmpty(change_admin)){
	;
__p += '\n\t<a class="h6 navbar-btn js-edit-organization-member-permission-to-admin';
  if(organization_user.attributes.is_admin == true || organization_user.attributes.is_admin == 't'){ ;
__p += ' btn-default ';
 } ;
__p += '" data-organizations_user_id="' +
__e( organization_user.organizations_user_id ) +
'" href="#">\n\t\t<span class="show text-primary navbar-btn h5">Owner ';
  if(organization_user.attributes.is_admin == true || organization_user.attributes.is_admin == 't'){ ;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t<span class="show">Can view, create and edit org boards, and change settings for the organization.</span>\n\t</a>\n\t';
 } else { ;
__p += '\n\t\t<a class="h6 navbar-btn';
  if(organization_user.attributes.is_admin == true || organization_user.attributes.is_admin == 't'){ ;
__p += ' btn-default ';
 } ;
__p += '">\n\t\t\t<span class="show text-primary navbar-btn h5">Owner ';
  if(organization_user.attributes.is_admin == true || organization_user.attributes.is_admin == 't'){ ;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t\t<span class="show">Can view, create and edit org boards, and change settings for the organization.</span>\n\t\t</a>\n\t';
 } ;
__p += '\n</li>\n<li class="divider col-xs-12 btn-block"></li>\n<li class="col-xs-12 btn-block">\n\t';
				
		if(!_.isEmpty(change_normal)){
	;
__p += '\n\t<a class="' +
((__t = ( change_normal )) == null ? '' : __t);
  if(organization_user.attributes.is_admin == false || organization_user.attributes.is_admin == 'f'){ ;
__p += ' btn-default ';
 } ;
__p += '" data-organizations_user_id="' +
__e( organization_user.organizations_user_id ) +
'" href="#">\n\t\t<span class="show text-primary navbar-btn h5">Member ';
  if(organization_user.attributes.is_admin == false || organization_user.attributes.is_admin == 'f'){ ;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t<span class="show">Can view, create, and edit org boards, but not change settings.</span>\n\t</a>\n\t';
 } else { ;
__p += '\n\t<a class="h6 navbar-btn ';
  if(organization_user.attributes.is_admin == false || organization_user.attributes.is_admin == 'f'){ ;
__p += ' btn-default ';
 } ;
__p += '">\n\t\t<span class="show text-primary navbar-btn h5">Member';
  if(organization_user.attributes.is_admin == false || organization_user.attributes.is_admin == 'f'){ ;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t<span class="show">Can view, create, and edit org boards, but not change settings.</span>\n\t\t</a>\n\t';
 } ;
__p += '\n</li>\n\n';

}
return __p
};

this["JST"]["templates/organization_member_remove_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<li class="col-xs-12">\n\t<a class="show row small well-xs js-delete-organization-member" data-organizations_user_id="' +
__e( organization_users.organizations_user_id ) +
'" href="#">\n\t\t<span class="show text-primary navbar-btn h5">Remove from organization</span>\n\t\t<span class="navbar-btn">Remove all access to the organization.  The member will remain on all their boards in this organization.</span>\n\t</a>\n</li>\n';

}
return __p
};

this["JST"]["templates/organization_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Main block start -->\n<section class="clearfix row">\n <div class="col-xs-12 h4">\n\t<ul class="nav nav-tabs">\n\t\t<li ';
 if(_.isUndefined(type) || type == 'boards'){ ;
__p += 'class="active" ';
};
__p += '><a href="#/organization/' +
__e(organization.attributes.id) +
'/boards" class="">Boards</a></li>\n\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_organization_user_listing"})) || !_.isEmpty(role_links.where({slug: "add_organization_user"}))){ ;
__p += '\n\t\t\t<li ';
 if(!_.isUndefined(type) && type == 'users'){ ;
__p += 'class="active" ';
};
__p += '><a href="#/organization/' +
__e(organization.attributes.id) +
'/users" class="">Members</a></li>\n\t\t';
 } ;
__p += '\n\t</ul>\n</div>\n  <div class="col-xs-12"> <div class="col-lg-10 col-md-9 col-sm-9 col-xs-12">\n\t<!-- Tab panes -->\n\t\t<div class="tab-content">\n\t\t\t<div class="tab-pane ';
 if(_.isUndefined(type) || type == 'boards'){ ;
__p += 'active';
};
__p += '" id="board">\n\t\t\t\t<section class="clearfix">\n\t\t\t\t  <div class="clearfix" id="js-organization-board-listing"> \n\t\t\t\t  </div>\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t\t<div class="tab-pane js-get-organization-member-lists-response  ';
 if(!_.isUndefined(type) && type == 'users'){ ;
__p += 'active';
};
__p += '" id="member"></div>\n\t\t</div>\n  </div>\n  <div id="js-org-drag" class="col-lg-2 col-md-3 col-sm-3 col-xs-12">\n\t<div class="well well-sm clearfix text-center">\n\t';

		var logo_path = "img/default-organization.png"; 
		var is_logo_added = false;
		if (!_.isUndefined(organization.attributes.logo_url) && organization.attributes.logo_url != null) {
			is_logo_added = true;
			logo_path = organization.showImage('Organization', organization.attributes.id, 'medium_thumb' ) +'?'+ new Date().getTime();
		}
	;
__p += '\n\t  <div ';
 if(!_.isUndefined(authuser.user)){;
__p += ' id="dropzone" ';
};
__p += 'class="navbar-btn btn-xs">';
 if(!_.isUndefined(authuser.user) && is_logo_added){ ;
__p += '<span class="js-remove-image profile-block show"><i class="icon icon-remove close-block cur"></i><span>';
};
__p += '<img src="' +
((__t = ( logo_path )) == null ? '' : __t) +
'" alt="[Image: ' +
((__t = ( organization.attributes.name)) == null ? '' : __t) +
']" title="' +
((__t = ( organization.attributes.name)) == null ? '' : __t) +
'" class="img-responsive img-thumbnail ';
 if(!_.isEmpty(role_links.where({slug: 'starred_board'}))){ ;
__p += 'drag-box';
 } ;
__p += '" id="js-organization-logo-' +
__e(organization.attributes.id ) +
'">\n\t\t<div id="manager-area">\n\t\t\t\n\t\t</div>\n\t\t</span>\n\t\t</span>\n\t\t<div class="drag-drop drag-drop-sm">Drop Files Here</div>\n\t</div>\n\t<span id="org-loader"></span>\n\t\n  </div>\n  \n  </div>\n  </div>\n  </div>\n</section>  ';

}
return __p
};

this["JST"]["templates/organization_visibility_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="col-xs-12 text-center clearfix">\n\t<div class="clearfix"><span class="col-xs-10"><strong>Select Visibility</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></div>\n</li>\n<li class="col-xs-12 divider"></li>\n<li class="col-xs-12">\n\t<a class="btn-default show row small well-xs js-edit-organization-visibility-to-private" href="#">\n\t\t<span class="show text-primary col-xs-12 navbar-btn h5">Private';
 if(organization.attributes.organization_visibility == 2){;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t<span class="col-xs-12 navbar-btn">This organization is private. It\\\'s not indexed or visible to those outside the org.</span>\n\t</a>\n</li>\n<li class="divider col-xs-12"></li>\n<li class="col-xs-12">\n\t<a class="show row small well-xs js-edit-organization-visibility-to-public" href="#">\n\t\t<span class="show text-primary col-xs-12 navbar-btn h5">Public';
 if(organization.attributes.organization_visibility == 1){;
__p += '<i class="icon-check well-sm"></i>';
};
__p += '</span>\n\t\t<span class="col-xs-12 navbar-btn">This organization is public. It\'s visible to anyone with the link and will show up in search engines like Google. Only those invited to the org can add and edit org boards.</span>\n\t</a>\n</li>';

}
return __p
};

this["JST"]["templates/organizations_board_form_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="js-back">\n\t <div class="col-xs-12 text-center clearfix"><a href="#" class="js-back-boards-list pull-left"><i class="icon-caret-left"></i></a><span class="col-xs-10"><strong>Add </strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i> </a></div> \n</li>\n<li class="col-xs-12 navbar-btn divider js-back"></li>\n';
 if(!_.isEmpty(role_links.where({slug: "add_board"}))){ ;
__p += '\n<li class="col-xs-12 btn-block js-back">\n\t<a href="#" class="js-show-board-import-form col-xs-12 navbar-btn h6">\n\t\t<span class="show clearfix text-primary navbar-btn h5">\n\t\t\t<span class="pull-left">Import Board from Trello</span> <span class="cssloader pull-right hide" id="js-board-import-loader"></span>\n\t\t</span>\n\t\t<span class="show">Upload json file exported from Trello.</span>\n\t</a>\n\t<form class="hide" id="js-board-import" enctype="multipart/form-data">\n\t\t<input type="file" name="board_import" class="js-board-import-file"/>\n\t</form>\n</li>\n<li class="col-xs-12 navbar-btn divider js-back"></li>\n<li class="col-xs-12 btn-block js-back">\n\t<a href="#" class="js-show-board-add-form col-xs-12 h6 navbar-btn">\n\t\t<span class="show clearfix text-primary navbar-btn h5">New Board</span>\n\t\t<span class="show">A board is a collection of cards ordered in a list of lists. Use it to manage a project, track a collection, or organize anything.</span>\n\t</a>\n</li>\n<li class="col-xs-12 navbar-btn divider js-back"></li>\n';
 } ;
__p += ' \n';
 if(!_.isEmpty(role_links.where({slug: "add_organization"}))){ ;
__p += '\n<li class="col-xs-12 btn-block js-back">\n\t<a href="#" class="js-show-organizations-add-form col-xs-12 navbar-btn h6">\n\t\t<span class="show clearfix text-primary navbar-btn h5">New Organization</span>\n\t\t<span class="show">An organization is a group of boards and people. Use it to group boards in your company, team, or family.</span>\n\t</a>\n</li>\n';
 } ;


}
return __p
};

this["JST"]["templates/organizations_list_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(organization != null){ ;
__p += '\n<td class="col-lg-5 col-md-3 col-sm-6 col-xs-5">\n\t<div class="media">\n\t\t';

			var logo_path = "img/default-organization.png";
			if (!_.isUndefined(organization.attributes.logo_url) && organization.attributes.logo_url != null) {
				logo_path = organization.showImage('Organization', organization.attributes.id, 'small_thumb' );
			}
		;
__p += '\n\t\t<a data-placement="bottom" title="' +
__e( organization.attributes.name ) +
'" data-toggle="tooltip" class="pull-left" href="#/organization/' +
__e( organization.attributes.id ) +
'"> <img title="' +
__e( organization.attributes.name ) +
'" alt="[Images: ' +
__e( organization.attributes.name ) +
']" src="' +
((__t = ( logo_path )) == null ? '' : __t) +
'" height="32" width="32" class="img-rounded"></a>\n\t\t  <div class="media-body">\n\t\t  \t<div class="clearfix">\n\t\t\t\t<a class="pull-left" href="#/organization/' +
__e( organization.attributes.id ) +
'"><h4 class="htruncate navbar-btn">' +
__e( organization.attributes.name ) +
'</h4></a>\n\t\t\t</div>\n\t\t\t';
 if(organization.attributes.description != ''){ ;
__p += '\n\t\t\t<div>\n\t\t\t\t<p class="htruncate-l3">' +
__e( organization.attributes.description) +
'</p>\n\t\t\t</div>\n\t\t\t';
};
__p += '\n\t\t  </div>\n\t</div>\n</td>\n<td class="text-right">\n<ul class="list-inline clearfix">\n\t<li class="pull-right ">\n\t\t<ul class="list-inline navbar-btn clearfix">\n\t\t\t<li class="dropdown navbar-btn">\n\t\t\t\t<a title="Members" class="btn btn-default ';
 if(organization.attributes.organizations_user_count != 0){ ;
__p += 'dropdown-toggle';
}else{;
__p += 'js-no-action';
};
__p += '" href="#" ';
 if(organization.attributes.organizations_user_count != 0){ ;
__p += 'data-toggle="dropdown"';
};
__p += '>' +
__e( organization.attributes.organizations_user_count) +
' Members</a>\n\t\t\t\t';
 if(organization.attributes.organizations_user_count != 0){ ;
__p += '\n\t\t\t\t\t<ul class="dropdown-menu arrow arrow-left  text-left" role="boards">\n\t\t\t\t\t\t';
 _.each(organization.attributes.organizations_users, function(organizations_user){;
__p += '\n\t\t\t\t\t\t\t<li><a href="#/user/' +
__e(organizations_user.user_id) +
'">' +
__e(organizations_user.username) +
'</a></li>\n\t\t\t\t\t\t';
});
__p += '\n\t\t\t\t\t</ul>\n\t\t\t\t';
};
__p += '\n\t\t\t</li>\n\t\t\t<li class="navbar-btn">\n\t\t\t\t<div class="checkbox-inline dropdown">\n\t\t\t\t\t<a title="Boards" class="btn btn-default ';
 if(organization.attributes.board_count != 0){ ;
__p += 'dropdown-toggle';
}else{;
__p += 'js-no-action';
};
__p += '" href="#" ';
 if(organization.attributes.board_count != 0){ ;
__p += 'data-toggle="dropdown"';
};
__p += '>' +
__e( organization.attributes.board_count) +
' Boards</a>\n\t\t\t\t\t';
 if(organization.attributes.board_count != 0){ ;
__p += '\n\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right  text-left" role="boards">\n\t\t\t\t\t\t\t';
 _.each(organization.attributes.boards_listing, function(board){;
__p += '\n\t\t\t\t\t\t\t';
 	
								var style = '';		
								if (board.background_picture_url) {
									var background_picture_url = board.background_picture_url.replace("_XXXX.jpg", "_n.jpg");
									style = 'background:url(' + background_picture_url + ') 25% 25%; background-size: cover';
								} else if (board.background_pattern_url) {
									var background_pattern_url = board.background_pattern_url.replace("_XXXX.jpg", "_n.jpg");
									style = 'background:url(' + background_pattern_url + ') repeat scroll 0% 0%;';
								} else if (board.background_color){
									style = 'background-color:' + board.background_color;
								} else {
									style = '';
								}
							;
__p += '\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href="#/board/' +
__e(board.id) +
'">\n\t\t\t\t\t\t\t\t\t\t<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t\t\t\t\t\t\t\t\t\t<span class="details navbar-btn">\n\t\t\t\t\t\t\t\t\t\t\t<span title="' +
__e( board.name ) +
'" class="board-list-item-name navbar-btn">' +
__e( board.name ) +
'</span>\n\t\t\t\t\t\t\t\t\t\t</span> \n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t';
});
__p += '\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t';
};
__p += '\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class="dropdown navbar-btn pull-right">\n\t\t\t\t<a class="btn btn-primary dropdown-toggle js-show-confirm-delete-organization" data-organization_id="' +
__e( organization.attributes.id ) +
'" data-toggle="dropdown" href="#"><span><i class="icon-remove"></i></span><span>Remove</span></a>\n\t\t\t\t<ul class="dropdown-menu dropdown-menu-right arrow arrow-right col-xs-12">\n\t\t\t\t\t<li class="js-show-confirm-delete-organization-response js-dropdown-popup dropdown-popup"></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t\t<li class="pull-right text-center">\n\t\t\t<ul class="list-inline navbar-btn clearfix">\n\t\t\t\t<li>\n\t\t\t\t\t<dl class="clearfix text-center list-group-item-heading">\n\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn list-activity"> <a href="#" class="btn btn-default js-no-action htruncate"><abbr class="timeago" title="' +
__e( organization.attributes.modified ) +
'">' +
__e( organization.attributes.modified ) +
'</abbr></a> </div>\n\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t<dd><h6 class="text-center h4 navbar-btn">Recent activity</h6></dd>\n\t\t\t\t\t</dl></li>\n\t\t\t\t<li>\n\t\t\t\t\t<dl class="clearfix text-center list-group-item-heading">\n\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn list-activity"> <a href="#" class="btn btn-default js-no-action  htruncate"><abbr class="timeago" title="' +
__e( organization.attributes.created ) +
'">' +
__e( organization.attributes.created ) +
'</a> </div>\n\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t<dd><h6 class="text-center h4 navbar-btn">Created</h6></dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<dl class="clearfix text-center list-group-item-heading">\n\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn list-activity"> ';
 if(organization.attributes.username != null){ ;
__p += '<a href="#/user/' +
__e( organization.attributes.user_id ) +
'" class="btn btn-default htruncate" title="' +
__e( organization.attributes.username ) +
'">' +
__e( organization.attributes.username ) +
'</a>';
}else{;
__p += '-';
};
__p += '</div>\n\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t<dd><h6 class="text-center h4 navbar-btn">Owner</h6></dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</li>\n\t\t\t </ul>\n\t\t</li>\n\t</ul>\n</td>\n';
}else{;
__p += '\n\t<div class="alert alert-info">\n\tNo organizations available.\n\t</div>\n';
};


}
return __p
};

this["JST"]["templates/organizations_lists_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="js-navbar-default" class="navbar navbar-default" role="navigation">\n  <div class="container-fluid">\n\t<div class="navbar-left navbar-btn">\n\t\t<h1 class="navbar-left navbar-btn"><span class="navbar-left"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a></span></h1>\n\t\t<ul class="list-inline navbar-left h2 navbar-btn navbar-form text-center">\n\t\t\t<li class="text-muted"><span class="h5">/</span></li>\n\t\t\t<li><span class="text-muted h4">Organizations</span></li>\n\t\t</ul>\n\t\t <div class="pull-left"> <div class="js-dropdown dropdown  docmodal-submenu row">\n              <a data-toggle="dropdown" id="dropdownMenu1" class="dropdown-toggle btn btn-link show" href="#"> <i class="icon-cog h3 text-muted"></i></a>\n              <ul role="menu" class="dropdown-menu arrow">\n                 <li class="text-center text-muted"><strong>Sort</strong></li>\n                 <li class="divider"></li>\n                 <li><a title="Name" href="#" class="js-sort-by" data-field="name">Name</a></li>\n                <li><a title="Owner" href="#" data-field="username" class="js-sort-by">Owner</a></li>\n                <li><a title="Created" href="#" data-field="created" class="js-sort-by">Created</a></li>\n                <li><a title="Users Count" href="#" data-field="organizations_user_count" class="js-sort-by">Users Count</a></li>\n                <li><a title="Board Count" href="#" data-field="board_count" class="js-sort-by">Board Count</a></li>\n              </ul>\n            </div></div>\n\t</div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["templates/organizations_lists_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel clearfix col-xs-12">\n\t<div class="table-responsive">\n\t\t<table class="table table-hover table-list">\n\t\t\t<tbody id="js-organizations-list">\n\t\t\t\t\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/organizations_user_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="clearfix">\n';
 if(!_.isEmpty(role_links.where({slug: "add_organization_user"}))){ ;
__p += '\n<div>\n\t<ul class="list-inline clearfix">\n\t\t<li class="dropdown pull-right">\n\t\t\t';
 if(!_.isUndefined(authuser.user)){;
__p += '\n\t\t\t\t<a class="btn btn-primary dropdown-toggle js-add-member-dropdown" data-toggle="dropdown" href="#"><span><i class="icon-plus"></i></span><span>Add Members</span></a>\n\t\t\t';
 } ;
__p += '\n\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t<li class="js-add-member-dropdown-load js-dropdown-popup dropdown-popup js-organization-member-search-response">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class="clearfix text-center col-xs-12">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<span class="col-xs-10"><strong>Members</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a></span></h4>\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-12 divider"></div>\n\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t<ul class="list-unstyled">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t  <form method="post" class="text-center">\n\t\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t  <label class="sr-only">Search Member</label>\n\t\t\t\t\t\t\t\t\t  <input type="text" autocomplete="off" id="inputOrganizationUserSearch" placeholder="Username OR Email" name="email" required class="js-organization-users-search form-control input-sm">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t  </form>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class="small">\n\t\t\t\t\tSearch for a person in ' +
__e( SITE_NAME ) +
' by name or email address.\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</li>\n\t<ul>\n</div>\n';
 } ;
__p += '\n';
 if(!_.isEmpty(role_links.where({slug: "view_organization_user_listing"}))){ ;
__p += '\n<div>\n\t<table class="table table-striped table-hover">\n\t\t<tbody>\n\t\t\t';
  if(!_.isEmpty(organizations_users)){ ;
__p += '\n\t\t\t\t';
 _.each(organizations_users.models, function(organizations_user){ ;
__p += '\n\t\t\t\t<tr>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<div class="clearfix">\n\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t<a data-toggle="tooltip" data-placement="bottom" data-original-title="' +
__e( organizations_user.attributes.username ) +
'" href="#/user/' +
__e(organizations_user.attributes.user_id ) +
'" >\n\t\t\t\t\t\t';
 } ;
__p += '<span class="pull-left">\n\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(organizations_user.attributes.profile_picture_path)) {
										 var profile_picture_path = organizations_users.showImage('User', organizations_user.attributes.user_id, 'small_thumb' );
									;
__p += '\n\t\t\t\t\t\t\t\t\t\t<img src="' +
((__t = (profile_picture_path)) == null ? '' : __t) +
'" alt="[Image: ' +
__e(organizations_user.attributes.username ) +
']" title="' +
__e(organizations_user.attributes.username ) +
'" class="img-rounded img-responsive">\n\t\t\t\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t\t\t\t<i class="avatar avatar-color-194 img-rounded">' +
__e( organizations_user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '</span>\n\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t<div class="pull-left col-xs-5">\n\t\t\t\t\t\t\t\t<h4>' +
__e( organizations_user.attributes.full_name ) +
'</h4>\n\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t<span class="show"><a href="#/user/' +
__e(organizations_user.attributes.user_id ) +
'">' +
__e( organizations_user.attributes.username ) +
'</a></span>\n\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t\t<span class="show">' +
__e( organizations_user.attributes.username ) +
'</span>\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="text-right">\n\t\t\t\t\t\t\t\t\t<ul class="list-inline clearfix">\n\t\t\t\t\t\t\t\t\t\t<li class="dropdown navbar-btn">\n\t\t\t\t\t\t\t\t\t\t\t<a title="Boards" class="btn btn-default ';
 if(organizations_user.attributes.user_board_count != 0){ ;
__p += 'dropdown-toggle';
}else{;
__p += 'js-no-action';
};
__p += '" href="#" ';
 if(organizations_user.attributes.user_board_count != 0){ ;
__p += 'data-toggle="dropdown"';
};
__p += '>' +
__e( organizations_user.attributes.user_board_count) +
' Boards</a>\n\t\t\t\t\t\t\t\t\t\t\t';
 if(organizations_user.attributes.boards_users != null && organizations_user.attributes.user_board_count != 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-left  text-left" role="boards" id="js-user-activity-menu-response-' +
__e( organizations_user.attributes.id) +
'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
 _.each(organizations_user.attributes.boards_users, function(boards_user){;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "starred_board"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#/board/' +
__e(boards_user.board_id) +
'">' +
__e(boards_user.name) +
'</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="#">' +
__e(boards_user.name) +
'</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
});
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t';
};
__p += '\n\t\t\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li class="navbar-btn">\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a title="Activities" class="btn btn-default js-all-user-activities" href="#" data-user_id="' +
__e( organizations_user.attributes.user_id ) +
'">Activities</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_organization_user"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t';
 if(!_.isUndefined(authuser.user)){;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li class="dropdown navbar-btn">\n\t\t\t\t\t\t\t\t\t\t\t<div class="btn-group text-left navbar-btn">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default dropdown-toggle js-show-organization-member-permission-form js-change-permission-content-' +
__e( organizations_user.attributes.id ) +
'" data-toggle="dropdown" aria-expanded="false" data-organizations_user_id="' +
__e( organizations_user.attributes.id ) +
'">';
 if(organizations_user.attributes.is_admin) {;
__p += 'Owner';
 } else { ;
__p += 'Member';
 };
__p += '</button>\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default dropdown-toggle js-show-organization-member-permission-form" data-toggle="dropdown" aria-expanded="false" data-organizations_user_id="' +
__e( organizations_user.attributes.id ) +
'">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="sr-only">Toggle Dropdown</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\t\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right js-show-organization-member-permission-form-response">\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class="dropdown navbar-btn text-left js-show-confirm-delete-organization-member-dropdown">\n\t\t\t\t\t\t\t\t\t\t\t';
 
											if(!_.isEmpty(role_links.where({slug: "remove_organization_user"}))){
											if(!_.isUndefined(authuser.user) && organizations_user.attributes.user_id == authuser.user.id) {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
  if((organizations_user.attributes.is_admin && organizations_users.where( {is_admin : true}).length == 1) || organizations_users.length == 1) {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-primary" disabled="disabled"><span><i class="icon-remove"></i></span><span>Leave</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } else if((organizations_user.attributes.is_admin && organizations_users.where( {is_admin : true}).length > 1) || (!organizations_user.attributes.is_admin && organizations_users.length > 1)){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="btn btn-primary dropdown-toggle js-show-confirm-delete-organization-member" data-organizations_user_id="' +
__e( organizations_user.attributes.id ) +
'" data-toggle="dropdown" href="#"><span><i class="icon-remove"></i></span><span>Leave</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu js-dropdown-popup arrow arrow-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-center clearfix">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="col-xs-10"><strong>Remove Member</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class="js-show-confirm-delete-organization-member-response divider"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t';
 } else if(!_.isUndefined(authuser.user) && organizations_user.attributes.user_id != authuser.user.id) {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
  if((organizations_user.attributes.is_admin && organizations_users.where( {is_admin : true}).length == 1) || organizations_users.length == 1) {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-primary" disabled="disabled"><span><i class="icon-remove"></i></span><span>Remove</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } else if((organizations_user.attributes.is_admin && organizations_users.where( {is_admin : true}).length > 1) || organizations_users.length > 1) {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="btn btn-primary dropdown-toggle js-show-confirm-delete-organization-member" data-organizations_user_id="' +
__e( organizations_user.attributes.id ) +
'" data-toggle="dropdown" href="#"><span><i class="icon-remove"></i></span><span>Remove</span></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu js-dropdown-popup arrow arrow-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class="clearfix">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="col-xs-12 text-center clearfix">\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class="col-xs-10"><strong>Remove Member</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class="js-show-confirm-delete-organization-member-response divider"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\n\t\t\t\t\t\t\t\t\t\t\t';
 }} ;
__p += '\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t';
 } else{ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t<li class="navbar-btn">\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<a title="';
 if(organizations_user.attributes.is_admin) {;
__p += 'Owner';
 } else { ;
__p += 'Member';
 };
__p += '" class="btn btn-default js-no-action" href="#">';
 if(organizations_user.attributes.is_admin) {;
__p += 'Owner';
 } else { ;
__p += 'Member';
 };
__p += '</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t';
} };
__p += '\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t';
 }); ;
__p += '\n\t\t\t';
 } else { ;
__p += '\n\t\t\t\t<tr><td>No members available</td></tr>\n\t\t\t';
 } ;
__p += '\n\t\t</tbody>\n\t</table>\n</div>\n';
 } ;
__p += '\n</div>';

}
return __p
};

this["JST"]["templates/role_settings"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-xs-12 js-container-div-role">\n\t<form id="js-save-role-settings">\n\t\t<div class="table-responsive navbar-btn">\n\t\t\t<div class="well-sm">\n\t\t\t\t<div class="alert alert-info list-group-item-text">Currently, board owner, board member, organization owner and organization member roles are static with below permissions:</div>\n\t\t\t</div>\n\t\t\t<div class="col-xs-12">\n\t\t\t<div class="col-xs-6">\n\t\t\t<h3>Organization</h3>\n\t\t\t<table class="table">\n\t\t\t\t<thead>\n\t\t\t\t\t<th class="col-xs-1"></th>\n\t\t\t\t\t<th class="col-xs-1 text-center">Owner</th>\n\t\t\t\t\t<th class="col-xs-1 text-center">Member</th>\n\t\t\t\t</thead>\n\t\t\t\t<tbody class="acl-link-list">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Add Member</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Remove Member</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Change Permission</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class="col-xs-6">\n\t\t\t<h3>Board</h3>\n\t\t\t<table class="table">\n\t\t\t\t<thead>\n\t\t\t\t\t<th class="col-xs-1"></th>\n\t\t\t\t\t<th class="col-xs-1 text-center">Owner</th>\n\t\t\t\t\t<th class="col-xs-1 text-center">Member</th>\n\t\t\t\t</thead>\n\t\t\t\t<tbody class="acl-link-list">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Archived list send back to board</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Change background to board</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Copy board</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Set cover image to card</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Close board</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" checked="checked"/>\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" />\n\t\t\t\t\t\t\t\t<label></label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="well-sm">\n\t\t\t\t<div class="alert alert-info list-group-item-text">Below permissions can be changed:</div>\n\t\t\t</div>\n\t\t\t<table class="table js-acl-link-list acl-link-list">\n\t\t\t\t<thead>\n\t\t\t\t\t<th colspan="2" class="col-xs-15">Name</th>\n\t\t\t\t\t';
 
					  roles.each(function(role) {
						if(role.attributes.name === 'user') {
					;
__p += '\n\t\t\t\t\t\t<th class="col-xs-1 text-center">' +
__e( role.attributes.name ) +
' (Owner, Member)</th>\n\t\t\t\t\t';

						} else {
					;
__p += '\n\t\t\t\t\t\t<th class="col-xs-1 text-center">' +
__e( role.attributes.name ) +
'</th>\n\t\t\t\t\t';
}});;
__p += '\n\t\t\t\t\t\n\t\t\t\t</thead>\n\t\t\t\t<tbody class="js-acl-link-list-body acl-link-list">\n\t\t\t\t\t';

						var acl_link_groups = ["Users","Boards","Lists","Cards","Organizations","Master"];
						var group = '';
						var old_group = '';
						var group_id = '';
						acl_links.each(function(acl_link) {
							acl_link.acl_links_roles.add(acl_link.attributes.acl_links_roles);
							group_id = acl_link.attributes.group_id - 1;
							group = acl_link_groups[group_id];
							if( group != old_group){
					;
__p += '\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td colspan="5" class="text-primary"><h3>' +
__e( group ) +
'</h3></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class="col-xs-1"> <div class="invisible"></div></td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t' +
__e( acl_link.attributes.name) +
'\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t';
 
								  roles.each(function(role) {
									var is_enabled = acl_link.acl_links_roles.findWhere({
										role_id: parseInt(role.attributes.id)
									});
									if(role.attributes.id === "1") {
									;
__p += '\n\t\t\t\t\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" name="acl_link_id[' +
__e( role.attributes.id ) +
'][' +
__e( acl_link.attributes.id ) +
']" value="' +
__e( acl_link.attributes.id) +
'" ';
 if(!_.isEmpty(is_enabled)) { ;
__p += ' checked="checked" ';
 } ;
__p += ' id="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"/>\n\t\t\t\t\t\t\t\t\t\t\t<label class="js-update-role" data-acl_link_id="' +
__e( acl_link.attributes.id ) +
'"  data-role_id="' +
__e( role.attributes.id ) +
'" for="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"></label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t';

									} else if(role.attributes.id === "2") {
										if(acl_link.attributes.is_allow_only_to_admin === 1) {
																					;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="js-update-role" data-acl_link_id="' +
__e( acl_link.attributes.id ) +
'"  data-role_id="' +
__e( role.attributes.id ) +
'" for="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'">-</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t';
									
										} else {
											;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" name="acl_link_id[' +
__e( role.attributes.id ) +
'][' +
__e( acl_link.attributes.id ) +
']" value="' +
__e( acl_link.attributes.id) +
'" ';
 if(!_.isEmpty(is_enabled)) { ;
__p += ' checked="checked" ';
 } ;
__p += ' id="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="js-update-role" data-acl_link_id="' +
__e( acl_link.attributes.id ) +
'"  data-role_id="' +
__e( role.attributes.id ) +
'" for="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t';
									
										}
									} else if(role.attributes.id === "3") {
										if(acl_link.attributes.is_allow_only_to_admin === 1 || acl_link.attributes.is_allow_only_to_user === 1 ) {
											;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="js-update-role" data-acl_link_id="' +
__e( acl_link.attributes.id ) +
'"  data-role_id="' +
__e( role.attributes.id ) +
'" for="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'">-</label>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t';
									
										} else {
											;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<td class="text-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" class="cur" name="acl_link_id[' +
__e( role.attributes.id ) +
'][' +
__e( acl_link.attributes.id ) +
']" value="' +
__e( acl_link.attributes.id) +
'" ';
 if(!_.isEmpty(is_enabled)) { ;
__p += ' checked="checked" ';
 } ;
__p += ' id="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class="js-update-role" data-acl_link_id="' +
__e( acl_link.attributes.id ) +
'"  data-role_id="' +
__e( role.attributes.id ) +
'" for="acl_link_id_' +
__e( role.attributes.id ) +
'_' +
__e( acl_link.attributes.id ) +
'"></label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t';
									
										}
									}
								});;
__p += '\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t';
 old_group = group;}); ;
__p += '\n\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</form>\n</div>';

}
return __p
};

this["JST"]["templates/roles"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td>\n\t' +
__e( acl_link.attributes.name) +
'\n</td>\n<td class="text-right">\n\t';
 
	  for(var i = 1; i <= 3; i++){
	  var is_enabled = acl_link.acl_links_roles.findWhere({
            role_id: i
        })
	;
__p += '\n\t<div class="checkbox">\n\t<input type="checkbox" name="acl_link_id[' +
__e( i ) +
'[' +
__e( acl_link.attributes.id ) +
']" value="' +
__e( acl_link.attributes.id) +
'" ';
 if(!_.isEmpty(is_enabled)) { ;
__p += ' checked="checked" ';
 } ;
__p += '/>\n\t</div> \n\t';
};
__p += '\n</td>\n';

}
return __p
};

this["JST"]["templates/search_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


_.each(hits, function(hit) {
	if (hit._index === 'boards') {
;
__p += '\t\n\t\t<li>' +
__e( hit._source.doc.board_name ) +
'</li>\n';
		
	} else if (hit._index === 'lists') {
;
__p += '\t\n\t\t<li>' +
__e( hit._source.doc.list_name ) +
'</li>\n';
		
	} else if (hit._index === 'cards') {
;
__p += '\t\n\t\t<li class="js-show-modal-card-view">' +
__e( hit._source.doc.card_name ) +
'</li>\n';
		
	}

});
;
__p += '\n';

}
return __p
};

this["JST"]["templates/select_board_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (name == 'private') {
;
__p += '\n\t\t<span title="Private" class="icon-lock text-primary"></span>Private\t\n';
	} else if (name == 'public') {
;
__p += '\n\t\t<span title="Public" class="icon-circle text-primary"></span>Public\n';
	} else if (!_.isUndefined(data.organization_id)) {
;
__p += '\n\t\t<span title="Organization" class="icon-group text-primary"></span>Organization\n';
	} ;


}
return __p
};

this["JST"]["templates/selected_board_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<span class="pull-left">\n\t<span class="pull-left navbar-btn">This board will be </span>\n</span>\n<div class="btn-group pull-right">\n\t<button type="button" class="btn btn-default btn-sm js-change-visibility"><i class="icon-lock"></i>';
 if (name == 'org') { ;
__p += 'Organization ';
}else if (name == 'public') { ;
__p += 'Public ';
}else{;
__p += 'Private';
};
__p += '</button>\n\t<button type="button" class="btn btn-default btn-sm dropdown-toggle js-change-visibility" data-toggle="dropdown" aria-expanded="false">\n\t\t<span>\n\t\t\t<i class="icon-caret-down"></i>\n\t\t</span>\n\t\t<span class="sr-only">Toggle Dropdown</span>\n\t</button>\n</div>';

}
return __p
};

this["JST"]["templates/setting_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Main block start -->\n<section class="clearfix row">\n  <div class="col-xs-12">\n\t<div class="clearfix">\n\t\t<ul class="nav nav-tabs no-bor h3">\n\t\t';
 
			var i = 0;
			if (list.models.length > 0 ) { 
				_.each(list.models, function(settingCategory) {				
					var settings = settingCategory.get('settings');
		;
__p += '\n\t\t\t\t<li ';
 if (!_.isUndefined(id) && id == settingCategory.get('id')) { ;
__p += 'class="active" ';
} else if (_.isUndefined(id) && settingCategory.get('id') == 3) { ;
__p += 'class="active" ';
};
__p += ' ><a href="#/settings/' +
__e(settingCategory.get('id')) +
'">' +
__e( settingCategory.get('name') ) +
'</a></li>\n\t\t';
 
					i++;
				});
			} 
		;
__p += '\n\t\t</ul>\n\t</div>\n\t<div class="row">\n\t\t<div class="tab-content col-sm-10">\n\t\t';
 if (list.models.length > 0 ) { 
				var j = 0;
				_.each(list.models, function(settingCategory) {				
					var settings = settingCategory.get('settings');
		;
__p += '\t\t\n\t\t\t\t<div class="modal-body tab-pane clearfix ';
 if (!_.isUndefined(id) && id == settingCategory.get('id')) { ;
__p += ' active ';
} else if (_.isUndefined(id) && settingCategory.get('id') == 3) { ;
__p += ' active ';
};
__p += '" id="settingTab' +
__e( settingCategory.get('id') ) +
'">\n\t\t\t\t\t';
 if(!_.isEmpty(settings)){ ;
__p += '\n\t\t\t\t\t<form class="form-horizontal clearfix col-lg-6 col-md-8 col-sm-12 col-xs-12 js-setting-list-form" role="form" id="js-setting-list-form">\n\t\t\t\t\t';

					 var prev_category_id = 0;
					  _.each(settings, function(setting) {  ;
__p += '\n\t\t\t\t\t\t';
 
							if(setting.setting_category_id != prev_category_id && setting.setting_category_parent_id != 0){ 
						;
__p += '\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<legend>\n\t\t\t\t\t\t\t\t\t<span class="show h4">' +
((__t = (setting.category_name)) == null ? '' : __t) +
'</span>\n\t\t\t\t\t\t\t\t</legend>\n\t\t\t\t\t\t';
};
__p += '\n\t\t\t\t\t\t';
 if(setting.type == 'checkbox') { ;
__p += '\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<div class="col-sm-offset-4 col-sm-8">\n\t\t\t\t\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t\t\t\t\t<input class="js-checkbox" id="inputSetting' +
__e( setting.id ) +
'" name="' +
__e( setting.name ) +
'" type="checkbox" ';
 if(setting.value === 'true') { ;
__p += ' checked="checked" ';
 } ;
__p += ' value="' +
__e( setting.value ) +
'">\n\t\t\t\t\t\t\t\t\t\t<label for="inputSetting' +
__e( setting.id ) +
'">' +
__e( setting.label ) +
' </label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t  <label for="inputSetting' +
__e( setting.id ) +
'" class="col-sm-4 control-label col-xs-12">' +
__e( setting.label ) +
'</label>\n\t\t\t\t\t\t\t  <div class="col-sm-8 col-xs-12">\n\t\t\t\t\t\t\t\t<input type="text" id="inputSetting' +
__e( setting.id ) +
'" name="' +
__e( setting.name ) +
'" class="form-control" value="' +
__e( setting.value ) +
'" />\n\t\t\t\t\t\t\t\t<div><span class="help-block">' +
((__t = ( setting.description )) == null ? '' : __t) +
'</span></div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t';
 
							if(setting.setting_category_id != prev_category_id && setting.setting_category_parent_id != 0){ 
							 prev_category_id =  setting.setting_category_id;
						;
__p += '\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t';
};
__p += '\n\t\t\t\t\t\t\n\t\t\t\t\t';
 }); ;
__p += '\n\t\t\t\t\t  <div class="form-group">\n\t\t\t\t\t\t<label for="submit2" class="sr-only col-sm-4 control-label col-xs-12">submit</label>\n\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t<input type="submit" value="Submit" id="submit2" class="btn btn-primary">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</form>\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</div>\n\t\t';
 
					j++;
				});
			} 
		;
__p += '\t\t\t\t\n\t\t</div>\n\t</div>\n  </div>\n</section>\n<!-- Main block end -->';

}
return __p
};

this["JST"]["templates/show_all_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


	var private_visibility = "";
	var org_visibility = "";
	var public_visibility = "";
	
	if (visibility == 0) {
		private_visibility = '<i class="icon-check"></i>';
	} else if (visibility == 1) {
		org_visibility = '<i class="icon-check"></i>';
	} else if (visibility == 2) {
		public_visibility = '<i class="icon-check"></i>';
	}
;
__p += '\n\t<li class="col-xs-12 btn-block">\n\t\t<a href="#" name="private" class="';
  if (visibility == 0) { ;
__p += ' btn-default ';
 } ;
__p += ' js-select h6 navbar-btn"> \n\t\t\t<span class="show text-primary navbar-btn h5"> Private ' +
((__t = ( private_visibility )) == null ? '' : __t) +
' </span>\n\t\t\t<span class="show"> This board is private. Only people added to the board can view and edit it. </span>\n\t\t</a>\n\t</li>\n\t<li class="col-xs-12 divider navbar-btn"> </li>\n\t<li class="col-xs-12 btn-block"> \n\t\t<a href="#" name="org" class="';
  if (visibility == 1) { ;
__p += ' btn-default ';
 } ;
__p += ' js-select js-show-add-organization-form h6 navbar-btn">\n\t\t\t<span class="show text-primary navbar-btn h5"> Organization ' +
((__t = ( org_visibility )) == null ? '' : __t) +
' </span>\n\t\t\t<span class="show"> This board is visible to members of the organization. Only people added to the board can edit. <span class="error"> The board must be added to an org to enable this. </span> </span> </a>\n\t</li>\n\t<li class="col-xs-12 divider navbar-btn"> </li>\n\t<li class="col-xs-12 btn-block"> \n\t\t<a href="#" name="public" class="';
  if (visibility == 2) { ;
__p += ' btn-default ';
 } ;
__p += ' js-select h6 navbar-btn"><span class="show text-primary navbar-btn h5"> Public ' +
((__t = ( public_visibility )) == null ? '' : __t) +
' </span><span class="show"> This board is public. It\'s visible to anyone with the link and will show up in search engines like Google.  Only people added to the board can edit.  </span> </a> \n\t</li>';

}
return __p
};

this["JST"]["templates/show_board_member_permission_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 text-center clearfix">\n\t<span class="col-xs-10"><strong>Change Permissions</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove"></i></a>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12 member-modal js-pre-scrollable vertical-scrollbar">\n\t<ul class="list-unstyled list-inline">\n\t\t<li class="plull-left">\n\t\t\t<a class="js-edit-board-member-permission-to-admin" data-board_user_id="' +
__e( board_user_id ) +
'" href="#">\n\t\t\t\t<span class="show">Admin</span><span>Can view, create and edit boards, and change settings for the board.</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class="plull-left">\n\t\t\t<a class="js-edit-board-member-permission-to-normal" data-board_user_id="' +
__e( board_user_id ) +
'" href="#">\n\t\t\t\t<span class="show">Normal</span><span>Can view, create, and view members, but not change settings.</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div>';

}
return __p
};

this["JST"]["templates/show_board_visibility"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '        <li class="col-xs-12 btn-block"><a href="#" name="private" class="';
  if (visibility == 0) { ;
__p += ' btn-default ';
 } ;
__p += '  h6 js-set-privte-board navbar-btn"> <span class="show text-primary navbar-btn h5"> Private ';
 if (visibility == 0) { ;
__p += ' <i class="icon-check"></i> ';
 } ;
__p += ' </span><span class="show"> This board is private. Only people added to the board can view and edit it. </span> </a> </li>\n\t\t<li class="divider col-xs-12 navbar-btn"></li>\n        <li class="col-xs-12 btn-block"> <a href="#" name="org" class="';
  if (visibility == 1) { ;
__p += ' btn-default ';
 } ;
__p += ' h6 navbar-btn js-show-board-organization"><span class="show text-primary navbar-btn h5"> Organization ';
 if (visibility == 1) { ;
__p += ' <i class="icon-check"></i> ';
 } ;
__p += ' </span><span class="show"> This board is visible to members of the organization. Only people added to the board can edit. <span class="error"> The board must be added to an org to enable this. </span> </span> </a> </li>\n\t\t<li class="divider col-xs-12 navbar-btn"></li> \n        <li class="col-xs-12 btn-block"> <a href="#" name="public" class="';
  if (visibility == 2) { ;
__p += ' btn-default ';
 } ;
__p += ' h6 navbar-btn js-set-public-board"><span class="show text-primary navbar-btn h5"> Public ';
  if (visibility == 2) { ;
__p += ' <i class="icon-check"></i> ';
 } ;
__p += ' </span><span class="show"> This board is public. It\'s visible to anyone with the link and will show up in search engines like Google.  Only people added to the board can edit.  </span> </a> </li>';

}
return __p
};

this["JST"]["templates/show_copy_board"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="clearfix">\n<div class="clearfix text-center col-xs-12">\n\t<a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link">\n\t\t<i class="icon-caret-left"></i>\n\t</a>\n\t<span class="col-xs-10 navbar-btn"><strong>Copy Board</strong></span>\n</div>\n<div class="col-xs-12 divider"></div>\n<div class="col-xs-12">\n<form class="normal" name="BoardCopyForm" id="BoardCopyForm" method="POST">\n  <fieldset>\n  <div class="form-group required">\n\t<label for="inputCopyBoardName">Name</label>\n\t<input type="text" autocomplete="off" id="inputCopyBoardName" name="name" class="form-control input-sm" required>\n  </div>\n  <input name="board_visibility"  id="inputBoardCopyVisibility" type="hidden" value="' +
__e(board.attributes.board_visibility ) +
'">\n  <div id="js-board-add-organization"></div>\n\t<div class="clearfix js-open-dropdown js-board-add-dropdown dropdown js-visibility-chooser-copy-board-dropdown"> \n\t\t<span class="js-visibility-container">\n\t\t\t<span class="pull-left">\n\t\t\t\t<span class="pull-left navbar-btn">This board will be </span>\n\t\t\t</span>\n\t\t\t<div class="btn-group pull-right"> \n\t\t\t\t<button type="button" class="btn btn-default btn-sm js-change-visibility" id="js-change-visible-content">';
 if(board.attributes.board_visibility == 0) { ;
__p += '\n\t\t\t\t\t<i class="icon-lock"></i>Private\n\t\t\t\t';
 } else if(board.attributes.board_visibility == 1) { ;
__p += '\n\t\t\t\t\t<i class="icon-group"></i>Organization\n\t\t\t\t';
 } else if(board.attributes.board_visibility == 2) { ;
__p += '\n\t\t\t\t\t<i class="icon-circle"></i>Public\n\t\t\t\t';
 } ;
__p += '</button>\n\t\t\t\t<button type="button" class="btn btn-default btn-sm dropdown-toggle js-change-visibility" data-toggle="dropdown" aria-expanded="false">\n\t\t\t\t\t<span><i class="icon-caret-down"></i></span>\n\t\t\t\t\t<span class="sr-only">Toggle Dropdown</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</span>\n\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t<li class="text-center">\n\t\t\t\t<strong>Change Visibility</strong>\n\t\t\t\t<span href="#" class="js-close-sidebar-popover pull-right col-xs-2"><i class="icon-remove cur"></i></span>\n\t\t\t</li>\n\t\t\t<li class="col-xs-12 divider js-visibility-chooser-copy-board"></li>\n\t\t</ul>\n\t</div>\n  <div class="form-group">\n\t<div class="checkbox">\n\t\t<input id="inputKeepCards" type="checkbox" checked="checked" value="1" name="keepCards" class="hide">\n\t\t<label for="inputKeepCards">Keep Cards</label>\n\t</div>\n  </div>\n  <div class="submit">\n\t<input type="submit" value="Create" id="submitBoardCopy" class="btn btn-primary">\n  </div>\n  </fieldset>\n</form>\n</div>\n</div>';

}
return __p
};

this["JST"]["templates/show_search_boards"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(!_.isEmpty(board) && board != null){ ;
__p += '\n\t<a class="clearfix" href="#/board/' +
__e( board.attributes.id ) +
'">\n\t\t<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t\t<span class="fade"></span>\n\t\t<span class="details">\n\t\t\t<span title="' +
__e( board.attributes.name ) +
'" class="board-list-item-name htruncate col-xs-12 row">' +
__e( board.attributes.name ) +
'</span>\n\t\t\t<span class="pull-right hide js-stared-conatiner js-stared-conatiner-' +
__e( board.attributes.id ) +
'">\n\t\t\t\t<span  title="Click to star this board. It will show up at top of your boards list." name="subscribe" class="icon-star-empty js-star-board" data-board_id="' +
__e( board.attributes.id ) +
'">\t\t</span>\n\t\t\t</span>\n\t\t</span>\n\t</a>\n';
 } else{ ;
__p += '\n\t<span class="col-xs-12"><div class="alert alert-info">\n\tNo boards available.\n</div></span>\n';
 } ;


}
return __p
};

this["JST"]["templates/show_search_message"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'You can use search operators like @member, #label, is:archived, and has:attachments to refine your search.';

}
return __p
};

this["JST"]["templates/show_sync_google_calendar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="clearfix text-center">\n\t<div class="clearfix text-center col-xs-12">\n\t\t<a href="#" class="js-back-to-sidebar pull-left btn btn-xs btn-link">\n\t\t\t<i class="icon-caret-left"></i>\n\t\t</a>\n\t\t<span class="col-xs-10 navbar-btn"><strong>URL</strong></span>\n\t</div>\n\t<div class="col-xs-12 divider"></div>\n\t<div class="col-xs-12">\n\t\t<form class="normal col-xs-12">\n\t\t  <div class="form-group">\n\t\t\t<input type="text" readonly="readonly" value="" class="form-control input-sm js-syn-calendar-response" id="js-select-google-sync-url">\n\t\t  </div>\n\t\t</form>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/starred_boards_index"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  ';
 if(!_.isEmpty(role_links.where({slug: "view_stared_boards"}))){ ;
__p += '\n  <div class="btn-block clearfix">\n    <div class="col-xs-12 js-header-starred-boards">\n    </div>\n  </div>\n  ';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/started_boards_listing"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(board != null){		
	var style = '';					
	if (board.attributes.background_picture_url) {
		var background_picture_url = board.attributes.background_picture_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_picture_url + '); background-size:cover;';
	} else if (board.attributes.background_pattern_url) {
		var background_pattern_url = board.attributes.background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_pattern_url + '); background-size:cover;';
	} else if (board.attributes.background_color){
		style = 'background-color:' + board.attributes.background_color + ';color:#ffffff;';
	} else {
		style = '';
	}
;
__p += '\n\t\t\t\t\n<a href="#/board/' +
__e( board.attributes.id ) +
'" class="highlight-icon clearfix">\n\t<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t<span class="details navbar-btn">\n\t\t<span title="' +
__e( board.attributes.name ) +
'" class="board-list-item-name navbar-btn">' +
__e( board.attributes.name ) +
'</span>\n\t\t<span class="pull-right hide js-stared-conatiner js-stared-conatiner-' +
__e( board.attributes.board_id ) +
'"></span>  \n\t</span> \n</a>\n';
 }else{ ;
__p += '\n <div class="alert alert-info">\n\tNo boards available.\n</div>\n';
};


}
return __p
};

this["JST"]["templates/switch_to_list_form"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\n\t<tr>\n\t\t<th>\n\t\t\t<ul class="list-inline navbar-btn clearfix">\t\n\t\t\t\t<li class="col-md-1 col-xs-2"><a class="js-sort-by show" title="ID" href="#" data-sort-by="id"><span class="icon-caret-down"></span>ID</a></li>\n\t\t\t\t<li class="col-md-4 col-xs-3"><a class="js-sort-by show" title="Card Name" href="#" data-sort-by="name"><span class="icon-caret-down hide"></span>Card Name</a></li>\n\t\t\t\t<li class="col-md-4 col-xs-3"><a class="js-sort-by show" title="List Name" href="#" data-sort-by="list_name"><span class="icon-caret-down hide"></span>List Name</a></li>\n\t\t\t\t<li class="col-md-3 col-xs-4"></li>\n\t\t\t\t<li class="col-md-1 col-xs-2"> <div class="js-dropdown dropdown  docmodal-submenu row">\n\t\t\t\t\t  <a data-toggle="dropdown" id="dropdownMenu1" class="dropdown-toggle show" href="#"> <i class="icon-cog h3"></i></a>\n\t\t\t\t\t  <ul role="menu" class="dropdown-menu arrow">\n\t\t\t\t\t\t <li class="text-center text-muted"><strong>Sort</strong></li>\n\t\t\t\t\t\t <li class="divider"></li>\n\t\t\t\t\t\t <li><a title="Voters" href="#" class="js-sort-by" data-sort-by="card_voter_count">Voters</a></li>\n\t\t\t\t\t\t <li><a title="Attachment" href="#" class="js-sort-by" data-sort-by="attachment_count">Attachment</a></li>\n\t\t\t\t\t\t <li><a title="Comment" href="#" class="js-sort-by" data-sort-by="Comment">Comment</a>\n\t\t\t\t\t\t </li>\n\t\t\t\t\t\t <li><a title="checklist pending" href="#" class="js-sort-by" data-sort-by="checklist_item_count">Checklist pending count</a>\n\t\t\t\t\t\t </li>\n\t\t\t\t\t\t <li><a title="checklist completed count" href="#" class="js-sort-by" data-sort-by="checklist_item_completed_count">Checklist completed count</a>\n\t\t\t\t\t\t </li>\n\t\t\t\t\t  </ul>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n            </ul>\n\t\t</th>\n\t<tr>\n</thead>\n<tbody class="js-card-list-view-' +
__e( board.id) +
'"></tbody>\n\n';

}
return __p
};

this["JST"]["templates/user"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<td class="col-lg-3 col-md-4">\n<div class="media">\n\t<a data-placement="bottom" title="' +
__e( user.attributes.username) +
'" data-toggle="tooltip" class="pull-left" href="#/user/' +
__e( user.attributes.id) +
'">\n\t';
 if(!_.isEmpty(user.attributes.profile_picture_path)){ 
		var profile_picture_path = user.showImage('User', user.attributes.id, 'small_thumb' );
	
	;
__p += '\n\t\t<img class="img-rounded img-responsive" src="' +
__e( profile_picture_path) +
'" alt="[Images: ' +
__e( user.attributes.username) +
']" title="' +
__e( user.attributes.username) +
'" />\n\t\t';
 }else{ ;
__p += '\n\t\t\t<i class="avatar avatar-color-194 img-rounded" title="' +
__e( user.attributes.username) +
'">' +
__e( user.attributes.initials) +
'</i>\n\t\t';
 } ;
__p += ' \n\t</a>\n\t<div class="media-body">\n\t\t<div>\n\t\t\t<a href="#/user/' +
__e( user.attributes.id) +
'"><h4 class="htruncate">' +
__e( user.attributes.username) +
'</h4></a>\n\t\t</div>\n\t\t<div>\n\t\t\t<p class="show">' +
__e( user.attributes.email) +
'\n\t\t\t';
 if(!user.attributes.is_email_confirmed){ ;
__p += '\n\t\t\t\t<span class="label label-warning">Unconfirmed</span>\n\t\t\t';
 } ;
__p += '</p>\n\t\t</div>\n\t</div>\n</div>\n</td>\n<td class="text-right col-lg-9 col-md-8">\n  <ul class="list-inline clearfix list-group-item-text">\n\t<li class="pull-right col-lg-5 col-sm-12 col-xs-5">\n\t\t<ul class="list-inline navbar-btn clearfix list-group-item-text">\n\t\t\t<li>\n\t\t\t\t<div class="btn-group text-left navbar-btn dropdown">\n\t\t\t\t\t<a title="Organizations" class="btn btn-default ';
 if(user.attributes.joined_organization_count != 0){ ;
__p += 'dropdown-toggle';
}else{;
__p += 'js-no-action';
};
__p += '" href="#" ';
 if(user.attributes.joined_organization_count != 0){ ;
__p += 'data-toggle="dropdown"';
};
__p += '>' +
__e( user.attributes.joined_organization_count) +
' Organizations</a>\n\t\t\t\t\t';
 if(user.attributes.joined_organization_count != 0){ ;
__p += '\n\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-left  text-left" role="boards">\n\t\t\t\t\t\t\t';
 _.each(user.attributes.organizations, function(organization){;
__p += '\n\t\t\t\t\t\t\t\t<li><a href="#/organization/' +
__e(organization.id) +
'">' +
__e(organization.name) +
'</a></li>\n\t\t\t\t\t\t\t';
});
__p += '\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t';
};
__p += '\n\t\t\t\t</div>\n\t\t\t\t<div class="btn-group text-left navbar-btn dropdown">\n\t\t\t\t\t<a title="Boards" class="btn btn-default ';
 if(user.attributes.joined_board_count != 0){ ;
__p += 'dropdown-toggle';
}else{;
__p += 'js-no-action';
};
__p += '" href="#" ';
 if(user.attributes.joined_board_count != 0){ ;
__p += 'data-toggle="dropdown"';
};
__p += '>' +
__e( user.attributes.joined_board_count) +
' Boards</a>\n\t\t\t\t\t';
 if(user.attributes.joined_board_count != 0){ ;
__p += '\n\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-left  text-left" role="boards" id="js-user-activity-menu-response-' +
__e( user.attributes.id) +
'">\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t';
};
__p += '\n\t\t\t\t</div>\n\t\t\t\t<a title="Activities" class="btn btn-default navbar-btn js-all-user-activities" href="#">Activities</a>\n\t\t    </li>\n\t\t\t<li class="navbar-btn">\n\t\t\t\t<div class="btn-group text-left radio-inline navbar-btn dropdown">\n\t\t\t\t  <button class="btn btn-default" type="button">';
if(user.attributes.role_id == 1){;
__p += ' Admin ';
}else if(user.attributes.role_id == 2){;
__p += ' User ';
}else{;
__p += ' Guest';
};
__p += '</button>\n\t\t\t\t  <button aria-expanded="false" data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>\n\t\t\t\t  <ul class="dropdown-menu arrow arrow-right" role="menu">\n\t\t\t\t\t<li><a href="#" class="';
 if(user.attributes.role_id == 1){;
__p += 'js-no-action';
}else{;
__p += 'js-change-user-role';
};
__p += '" data-role-id="1">Admin ';
 if(user.attributes.role_id == 1){;
__p += '<i class="icon-ok"></i>';
};
__p += '</a></li>\n\t\t\t\t\t<li><a href="#" class="';
 if(user.attributes.role_id == 2){;
__p += 'js-no-action';
}else{;
__p += 'js-change-user-role';
};
__p += '" data-role-id="2">User ';
 if(user.attributes.role_id == 2){;
__p += '<i class="icon-ok"></i>';
};
__p += '</a></li>\n\t\t\t\t\t<li><a href="#" class="';
 if(user.attributes.role_id == 3){;
__p += 'js-no-action';
}else{;
__p += 'js-change-user-role';
};
__p += '" data-role-id="3">Guest ';
 if(user.attributes.role_id == 3){;
__p += '<i class="icon-ok"></i>';
};
__p += '</a></li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t  </li>\n\t\t  <li>\n\t\t\t<div class="btn-group text-left checkbox-inline navbar-btn">\n\t\t\t\t<a href="#" class="navbar-btn btn btn-default ';
if(user.attributes.is_active == true){;
__p += 'js-block-user';
}else{;
__p += 'js-unblock-user';
};
__p += ' " title="Block" ';
 if(user.attributes.role_id == 1){;
__p += ' disabled="disabled" ';
 } ;
__p += '>\n\t\t\t\t\t<span class="icon-exclamation"></span>\n\t\t\t\t\t<span>';
if(user.attributes.is_active == true){;
__p += 'Block';
}else{;
__p += 'Unblock';
};
__p += '</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="navbar-btn pull-right">\n\t\t\t<span class="dropdown navbar-btn">\n\t\t\t<a title="Remove" aria-expanded="false" data-toggle="dropdown" class="btn btn-primary dropdown-toggle" href="#" ';
 if(user.attributes.role_id == 1){;
__p += ' disabled="disabled" ';
 } ;
__p += ' >\n\t\t\t\t<span class="icon-remove"></span>\n\t\t\t\t<span>Remove</span>\n\t\t\t</a>\n\t\t\t<ul class="dropdown-menu dropdown-menu-right arrow arrow-right col-xs-12">\n\t\t\t<li class="col-lg-12 clearfix text-center"> <div><span class="col-xs-10"><strong>Delete User?</strong></span><a class="js-close-popover pull-right" href="#"><i class="icon-remove "></i></a></div> </li>\n\t\t\t<li class="col-lg-12 divider"></li>\n\t\t\t<li class="col-lg-12 text-left">\n\t\t\t\t<span class="show">Deleting an user is permanent. There is no undo.</span>\n\t\t\t\t<div class="col-xs-12 btn-block navbar-btn"><a title="Delete User" class="js-remove-user"><span class="btn btn-primary">Delete</span></a></div>\n\t\t\t</li>\n\t\t  </ul>\n\t\t  </span>\n\t\t</li>\n\t  </ul>\n\t</li>\n\t<li class="pull-right text-center col-lg-7 col-sm-12 col-xs-7">\n\t\t<ul class="list-inline navbar-btn clearfix">\n\t\t\t<li class="pull-right">\n\t\t\t\t<dl class="clearfix text-center list-group-item-heading pull-left">\n\t\t\t\t\t<dt>\n\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn btn-group-sm list-activity"> \n\t\t\t\t\t\t\t\t<a href="#" class="btn btn-default js-no-action htruncate"><span class="navbar-btn"><abbr class="timeago" title="' +
__e( user.get('created') ) +
'">' +
__e( user.get("created") ) +
'</abbr></span></a> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn btn-group-xs"> \n\t\t\t\t\t\t\t\t<a href="#" class="btn btn-default js-no-action btn-xs" title=' +
__e( user.attributes.registered_ip) +
' ' +
__e( user.attributes.reg_country_name ) +
' ' +
__e( user.attributes.reg_city_name ) +
'">\n\t\t\t\t\t\t\t\t\t<span class="show">' +
__e( user.attributes.registered_ip) +
'</span> \n\t\t\t\t\t\t\t\t\t<span class="btn-xs pull-left">\n\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(user.attributes.reg_country_iso2)){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<span class="flags flag-' +
__e( user.attributes.reg_country_iso2) +
' top-smspace" title="' +
__e( user.attributes.reg_country_name ) +
'">' +
__e( user.attributes.reg_country_name ) +
'</span>\n\t\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<span class="top-smspace">N/A</span>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t</span> ' +
__e( user.attributes.reg_city_name ) +
'\n\t\t\t\t\t\t\t\t</a> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</dt>\n                    <dd>\n\t\t\t\t\t\t<h6 class="text-center h4 navbar-btn">Registered </h6> \n\t\t\t\t\t</dd>\n\t\t\t\t</dl>\n\t\t\t</li>\n\t\t\t<li class="pull-right">\n\t\t\t\t<dl class="clearfix text-center list-group-item-heading pull-left">\n\t\t\t\t\t<dt>\n\t\t\t\t\t\t<div class="btn-toolbar navbar-btn">\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn btn-group-sm"> \n\t\t\t\t\t\t\t\t<a href="#" class="btn btn-default js-no-action" title="' +
__e( user.attributes.user_login_count) +
' Count"><span class="navbar-btn">' +
__e( user.attributes.user_login_count) +
' Count</span></a> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn btn-group-sm list-activity"> \n\t\t\t\t\t\t\t\t<a href="#" class="btn btn-default js-no-action htruncate"><span class="navbar-btn">';
 if(user.get('last_login_date') !== null){ ;
__p += '<abbr class="timeago" title="' +
__e( user.get('last_login_date') ) +
'">' +
__e( user.get("last_login_date") ) +
'</abbr>';
}else{;
__p += '-';
};
__p += '</span></a> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class="btn-group navbar-btn  btn-group-xs"> \n\t\t\t\t\t\t\t\t<a href="#" class="btn btn-default js-no-action btn-xs" title="' +
__e( user.attributes.last_login_ip) +
' ' +
__e( user.attributes.log_country_name ) +
' ' +
__e( user.attributes.log_city_name ) +
'"><span class="show">' +
__e( user.attributes.last_login_ip) +
'</span> <span class="btn-xs pull-left">\n\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(user.attributes.log_country_iso2)){ ;
__p += '\n\t\t\t\t\t\t\t\t\t<span class="flags flag-' +
__e( user.attributes.log_country_iso2) +
' top-smspace" title="' +
__e( user.attributes.log_country_name ) +
'">' +
__e( user.attributes.log_country_name ) +
'</span>\n\t\t\t\t\t\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t\t\t\t\t<span class="top-smspace">N/A</span>\n\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t</span> ' +
__e( user.attributes.log_city_name ) +
'</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                     </dt>\n                     <dd>\n\t\t\t\t\t\t<h6 class="text-center h4 navbar-btn">Login</h6>\n\t\t\t\t\t </dd>\n\t\t\t\t</dl>\n\t\t\t</li>\n\t\t</ul>\n    </li>\n </ul>\n</td>';

}
return __p
};

this["JST"]["templates/user_activity"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(!_.isEmpty(activity) && activity != null){  ;
__p += ' \n\t';
 
				var cardLink = '<a href="#/board/' + activity.attributes.board_id + '/card/' + activity.attributes.card_id + '">' + _.escape(activity.attributes.card_name) + '</a>';
				var organizationLink = '<a href="#/organization/' + activity.attributes.organization_id + '">' + _.escape(activity.attributes.organization_name) + '</a>';
			if(activity.attributes.type != 'add_comment' && activity.attributes.type != 'edit_comment') {
				activity.attributes.comment = activity.attributes.comment.replace('##ORGANIZATION_LINK##', organizationLink);
				activity.attributes.comment = activity.attributes.comment.replace('##CARD_LINK##', cardLink);
				activity.attributes.comment = activity.attributes.comment.replace('##LABEL_NAME##', _.escape(activity.attributes.label_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CARD_NAME##', _.escape(activity.attributes.card_name));
				activity.attributes.comment = activity.attributes.comment.replace('##DESCRIPTION##', _.escape(activity.attributes.card_description));
				activity.attributes.comment = activity.attributes.comment.replace('##LIST_NAME##', _.escape(activity.attributes.list_name));
				activity.attributes.comment = activity.attributes.comment.replace('##BOARD_NAME##', _.escape(activity.attributes.board_name));
				activity.attributes.comment = activity.attributes.comment.replace('##USER_NAME##', _.escape(activity.attributes.full_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_NAME##', _.escape(activity.attributes.checklist_item_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_ITEM_PARENT_NAME##', _.escape(activity.attributes.checklist_item_parent_name));
				activity.attributes.comment = activity.attributes.comment.replace('##CHECKLIST_NAME##', _.escape(activity.attributes.checklist_name));
			} else {
					var comment = activity.attributes.full_name + ' commented in card ' + cardLink;
			}
		;
__p += '   \n\t\t<ul class="media-list">\n\t\t\t<li class="media">\n\t\t\t\t<a data-placement="bottom" title="' +
__e( activity.attributes.full_name) +
'" data-toggle="tooltip" href="#/user/' +
__e( activity.attributes.user_id ) +
'" class="pull-left">\t\t\t\t\t\t\t\t\n\t\t\t\t\t';
 if(!_.isEmpty(activity.attributes.profile_picture_path)) { 
						var profile_picture_path = activity.showImage('User', activity.attributes.user_id, 'normal_thumb' );
					;
__p += '\n\t\t\t\t\t\t<img src="' +
__e(profile_picture_path ) +
'" alt="[Image: ' +
__e(activity.attributes.full_name ) +
']" title="' +
__e(activity.attributes.full_name ) +
'" class="img-rounded img-responsive">\n\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t<i class="avatar avatar-color-194 avatar-md img-rounded">' +
__e( activity.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t</a>\n\t\t\t\t<div class="media-body">\n\t\t\t\t\t<div class="media-heading">\n\t\t\t\t\t\t';
 if(activity.attributes.type == 'add_comment' || activity.attributes.type == 'edit_comment') { ;
__p += '\t\n\t\t\t\t\t\t\t<span>' +
((__t = ( comment )) == null ? '' : __t) +
'</span>\n\t\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(_.escape(activity.attributes.comment), activity.attributes.board_id)) )) == null ? '' : __t) +
'\n\t\t\t\t\t\t';
 } else{;
__p += '\n\t\t\t\t\t\t\t' +
((__t = ( converter.makeHtml(makeLink(activity.attributes.comment, activity.attributes.board_id)) )) == null ? '' : __t) +
' \n\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t<small class="col-xs-12 pull-left"><abbr class="timeago pull-left text-muted" title="' +
__e( activity.attributes.created ) +
'">' +
__e( activity.attributes.created ) +
'</abbr><a class="pull-left" href="#/board/' +
((__t = ( activity.attributes.board_id )) == null ? '' : __t) +
'">&nbsp;on&nbsp;' +
__e( activity.attributes.board_name ) +
'</a></small>\n\t\t\t\t\t\t<div class="clearfix col-xs-12">\n\t\t\t\t\t\t\t<div class="clearfix col-xs-12">\n\t\t\t\t\t\t\t\t<small class="col-xs-12 pull-left">\n\t\t\t\t\t\t\t\t\t';
 if(!_.isUndefined(authuser.user) && activity.attributes.type == "add_comment" && type != "all") { ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'">\n\t\t\t\t\t\t\t\t\t\t\t<ul class="list-inline col-xs-offset-0">\n\t\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_comment"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a title="Edit" class="js-show-edit-activity js-edit-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-edit"></i>Edit</a></li>\n\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t\t\t\t\t<li><a title="Reply" class="js-show-reply-activity-form js-reply-activity-link-' +
__e( activity.attributes.id ) +
'" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-repeat"></i>Reply</a></li>\n\t\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "delete_comment"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a title="Delete" class="dropdown-toggle js-show-confirm-comment-delete" data-toggle="dropdown" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-remove"></i>Delete</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="dropdown-menu arrow arrow-right">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li id="js-acticity-actions-response-' +
__e( activity.attributes.id ) +
'" class="js-dropdown-popup dropdown-popup"></li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t';
 } else if(activity.attributes.revisions != null && activity.attributes.revisions != "" && (parseInt(authuser.user.id) == 1 || current_user_can_undo_it == true )){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "undo_activity"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t';
 if(_.isUndefined(activity.from_footer)) { ;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="js-acticity-action-' +
__e( activity.attributes.id ) +
'"><ul class="list-inline col-xs-offset-0"><li><a title="Undo" class="js-undo2 pull-left" href="#" data-activity-id="' +
__e( activity.attributes.id ) +
'"><i class="icon-undo"></i>Undo</a></li></ul></div>\n\t\t\t\t\t\t\t\t\t\t\t';
 };
__p += '\t\n\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t<span class="pull-left col-xs-12 js-activity-reply-form-response-' +
__e( activity.attributes.id ) +
'"></span>\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li><hr></li>\n\t\t</ul>\n';
 }else{ ;
__p += '\n\t<span id="js-no-activities">No activities available.</span>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/user_activity_menu"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<li class="js-dropdown-popup dropdown-popup">\n\t<a href="#" class="';
 if (user.attributes.joined_board_count !== 0) {;
__p += 'js-user-board-list';
};
__p += '">\n\t<p>On ' +
__e( user.attributes.joined_board_count) +
' Boards</p></a></li>';

}
return __p
};

this["JST"]["templates/user_board_list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 	
	var style = '';		
	if (user_board.attributes.background_picture_url) {
		var background_picture_url = user_board.attributes.background_picture_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_picture_url + ');background-size:cover;';
	} else if (user_board.attributes.background_pattern_url) {
		background_pattern_url = user_board.attributes.background_pattern_url.replace("_XXXX.jpg", "_s.jpg");
		style = 'background-image:url(' + background_pattern_url + ');background-size:cover;';
	} else if (user_board.attributes.background_color){
		style = 'background-color:' + user_board.attributes.background_color + ';color:#ffffff;';
	} else {
		style = '';
	}
;
__p += '\n<a href="#/board/' +
__e( user_board.attributes.board_id) +
'">\n\t<span style="' +
((__t = ( style )) == null ? '' : __t) +
'" class="preview-thumbnail"></span>\n\t<span class="details navbar-btn">\n\t\t<span title="' +
__e( user_board.attributes.name ) +
'" class="board-list-item-name navbar-btn">' +
__e( user_board.attributes.name ) +
'</span>\n\t</span> \n</a> ';

}
return __p
};

this["JST"]["templates/user_boards_listing_menu"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n    <div class="col-xs-12 text-center clearfix">\n            <span class="col-xs-10"><strong>Boards for</span><span title="' +
__e( boards.username) +
'"> ' +
__e( boards.username) +
'</span></strong></span><a href="#" class="js-close-popover pull-right"><i class="icon-remove"></i></a>\n    </div>\n    <div class="col-xs-12 divider"></div>\n    <div class="col-xs-12">\n        ';

			boards.each(function(board) {
		;
__p += '\n\t\t\t<li><a href="#/board/' +
__e( board.attributes.board_id) +
'">' +
__e( board.attributes.board_name) +
'</a></li>\n\t\t';
					
		   });
		;
__p += '\t\n    </div>\n</div>';

}
return __p
};

this["JST"]["templates/user_cards"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<h3><a href="#/board/' +
__e( card_user[0].attributes.board_id) +
'">' +
__e( key ) +
'</a></h3>\n<div class="board-viewlist col-xs-12 table-responsive">\n\t<table class="table">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>\n\t\t\t\t\t<ul class="list-inline navbar-btn clearfix">\t\n\t\t\t\t\t\t<li class="col-md-1 col-xs-2">ID</li>\n\t\t\t\t\t\t<li class="col-md-4 col-xs-3">Card Name</li>\n\t\t\t\t\t\t<li class="col-md-4 col-xs-3">List Name</li>\n\t\t\t\t\t\t<li class="col-md-3 col-xs-4"></li>                            \n\t\t\t\t\t</ul>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody class="js-card-list-view-11">\n\t';
 _.each(card_user, function(user_card) { ;
__p += '\n\t\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<div class="panel cur" id="js-card-1449">\n\t\t\t\t\t<div class="panel-body"> \n\t\t\t\t\t\t<ul class="list-inline navbar-btn clearfix">\n\t\t\t\t\t\t\t<li class="col-md-1 col-xs-2"><span class="card-id">#' +
__e( user_card.id) +
'</span></li>\n\t\t\t\t\t\t\t<li class="col-md-4 col-xs-3"><a href="#/board/' +
__e( user_card.attributes.board_id) +
'/card/' +
__e( user_card.attributes.id) +
'">' +
__e( user_card.attributes.name ) +
'</a></li>\n\t\t\t\t\t\t\t<li class="col-md-4 col-xs-3">' +
__e( user_card.attributes.list_name ) +
'</li>\n\t\t\t\t\t\t\t<li class="col-md-3 col-xs-4">\n\t\t\t\t\t\t\t\t<ul class="list-inline text-muted clearfix">\n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.cards_subscriber_count > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li><small><span class="icon-eye-open"></span></small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.card_voter_count > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t<li><small><span class="icon-thumbs-up"></span><span>' +
__e( user_card.attributes.card_voter_count ) +
'</span></small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.comment_count > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li><small><span class="icon-comment"></span><span>' +
__e( user_card.attributes.comment_count ) +
'</span></small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(user_card.attributes.description)){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li><small><span class="icon-align-left"></span><span></span></small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.checklist_item_count > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li><small>';
 if(user_card.attributes.checklist_item_completed_count == user_card.attributes.checklist_item_count) { ;
__p += '<div class="label label-success"> ';
 } ;
__p += '<span class="icon-list-ul"></span><span>' +
__e( user_card.attributes.checklist_item_completed_count ) +
'/' +
__e( user_card.attributes.checklist_item_count ) +
'</span>';
 if(user_card.attributes.checklist_item_completed_count == user_card.attributes.checklist_item_count) { ;
__p += '</div>';
 } ;
__p += '</small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.due_date > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li><small><span class="icon-time"></span><span>' +
__e( user_card.attributes.due_date ) +
'</span></small></li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t\t';
 if(user_card.attributes.attachment_count > 0){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="icon-paper-clip"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t' +
__e( user_card.attributes.attachment_count ) +
'\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t';
 } ;
__p += ' \n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t';
 }); ;
__p += '\n\t </tbody>\n\t</table>\n</div>';

}
return __p
};

this["JST"]["templates/user_index_container"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="panel clearfix col-xs-12">\n\t<div class="table-responsive">\n\t\t<table class="table table-hover js-user-list table-list"></table>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["templates/user_search_result"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(user != null && _.isUndefined(q)){ ;
__p += '\n\t<a title="' +
__e( user.attributes.username ) +
'" href="#" class="js-add-organization-member" data-user-id="' +
__e( user.id ) +
'"><span>\n';
 if(!_.isEmpty(user.attributes.profile_picture_path)) { 
	var profile_picture_path = user.showImage('User', user.attributes.id, 'micro_thumb' );
;
__p += '\n\t<img src="' +
__e(profile_picture_path ) +
'" alt="[Image: ' +
__e(user.attributes.username ) +
']" title="' +
__e(user.attributes.username ) +
'" class="img-rounded img-responsive avatar avatar-sm">\n';
 } else {;
__p += '\n\t<i class="avatar avatar-color-194 avatar-sm img-rounded">' +
__e( user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n';
 } ;
__p += '\n</span> <span>' +
__e( user.attributes.username ) +
'</span></a>\n';
 }else if(user == null && _.isUndefined(q)){ ;
__p += '\n\tNo users avaailable.\n';
 } else{ ;
__p += '\n\tSearch for a person in ' +
__e( SITE_NAME ) +
' by name or email address. \t\t\t\t\t\t\t\t\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["templates/user_view"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Main block start -->\n<section class="clearfix row">\n\t<div class="col-xs-12">\n\t\t<div class="clearfix">\n\t\t\t<ul class="nav nav-tabs no-bor h3">\n\t\t\t\t<li ';
 if (_.isUndefined(type) || type == 'profile') { ;
__p += 'class="active" ';
};
__p += '><a href="#/user/' +
__e(user.attributes.id) +
'/profile"  >Profile</a></li>\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_user_cards"}))){ ;
__p += '\n\t\t\t\t\t<li  ';
 if (!_.isUndefined(type) && type == 'cards') { ;
__p += 'class="active" ';
};
__p += '><a href="#/user/' +
__e(user.attributes.id) +
'/cards" >Cards</a></li>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_user_details"}))){ ;
__p += '\n\t\t\t\t\t<li ';
 if (!_.isUndefined(type) && type == 'settings') { ;
__p += 'class="active" ';
};
__p += '><a href="#/user/' +
__e(user.attributes.id) +
'/settings" >Settings</a></li>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="tab-content">\n\t\t\t\t';
 if (!_.isEmpty(role_links.where({slug: "view_user_activities"}))) { ;
__p += '\n\t\t\t\t\t<div class="modal-body tab-pane ';
 if (_.isUndefined(type) || type == 'profile') { ;
__p += 'active';
};
__p += '" id="profile">\n\t\t\t\t\t\t<div id="js-user-activites"></div>\n\t\t\t\t\t\t<span class="btn btn-primary hide" id="js-user-activites-load-more">Load more activities</span>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "view_user_cards"}))){ ;
__p += '\n\t\t\t\t\t<div class="modal-body tab-pane ';
 if (!_.isUndefined(type) && type == 'cards') { ;
__p += 'active';
};
__p += '" id="cards"></div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "edit_user_details"}))){ ;
__p += '\n\t\t\t\t\t<div class="modal-body tab-pane ';
 if (!_.isUndefined(type) && type == 'settings') { ;
__p += 'active';
};
__p += '" id="settings">\n\t\t\t\t\t\t<form class="form-horizontal clearfix pull-left js-user-profile-edit" role="form" enctype="multipart/form-data" id="js-user-profile-edit">\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="inputFullName" class="col-sm-4 control-label">Full Name</label>\n\t\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t\t<input type="text" id="inputFullName" class="form-control" name="full_name" value="' +
__e( user.attributes.full_name ) +
'" maxlength="50">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t<label for="AboutMe" class="col-sm-4 control-label">About Me</label>\n\t\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t\t<textarea class="form-control" id="AboutMe" rows="6" name="about_me">' +
__e( user.attributes.about_me ) +
'</textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t';
 if(!_.isUndefined(authuser.user) && authuser.user.role_id == 1){;
__p += '\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<label for="inputemail" class="col-sm-4 control-label">Email</label>\n\t\t\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t\t\t<input type="email" id="inputemail" class="form-control" name="email" value="' +
__e( user.attributes.email ) +
'">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t<div class="form-group required">\n\t\t\t\t\t\t\t\t<label for="inputinitials" class="col-sm-4 control-label">Initials</label>\n\t\t\t\t\t\t\t\t<div class="col-sm-8">\n\t\t\t\t\t\t\t\t\t<input type="text" id="inputinitials" class="form-control initialism" name="initials" value="' +
__e( user.attributes.initials.toUpperCase() ) +
'" maxlength="2" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t';
 if(!_.isEmpty(role_links.where({slug: "add_user_profile_picture"}))){ ;
__p += '\n\t\t\t\t\t\t\t\t<div class="form-group" id="dropzone">\n\t\t\t\t\t\t\t\t\t<label for="inputAttachment" class="col-sm-4 control-label sr-only">Upload Avatar</label>\n\t\t\t\t\t\t\t\t\t<div class="col-xs-8">\n\t\t\t\t\t\t\t\t\t\t<a data-placement="bottom" title="' +
__e( user.attributes.username) +
'" data-toggle="tooltip" href="#" class="avatar-option js-use-uploaded-avatar drag-box navbar-left"> \n\t\t\t\t\t\t\t\t\t\t\t';
 if(!_.isEmpty(user.attributes.profile_picture_path) && user.attributes.profile_picture_path != 'NULL') { 
												var profile_picture_path = user.showImage('User', user.attributes.id, 'small_thumb' ) +'?'+ new Date().getTime();
											;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="js-remove-image  profile-block show"><i class="icon icon-remove close-block cur h6"></i></span>\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="' +
__e( profile_picture_path ) +
'" width="50" height="50" clas="js-user-avatar">\n\t\t\t\t\t\t\t\t\t\t\t';
 } else {;
__p += '\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="avatar avatar-color-194 avatar-md img-rounded">' +
__e( user.attributes.initials ) +
'</i>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<span class="clearfix navbar-btn"><span id="dropzone-cssloader" ></span></span>\n\t\t\t\t\t\t\t\t  <div class="clearfix" id="manager-area"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t';
 } ;
__p += '\n\t\t\t\t\t\t\t<div class="col-xs-9 pull-right clearfix">\n\t\t\t\t\t\t\t\t<div class="form-group">\n\t\t\t\t\t\t\t\t\t<label for="submit2" class="col-sm-1 control-label sr-only">submit</label>\n\t\t\t\t\t\t\t\t\t<input type="submit" value="Submit" id="submit2" class="btn btn-primary btn-lg">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- Main block end -->';

}
return __p
};

this["JST"]["templates/user_view_header"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="js-navbar-default" class="navbar navbar-default" role="navigation">\n  <div class="container-fluid">\n\t<div class="navbar-left navbar-btn">\n\t  <div class="clearfix navbar-btn">\n\t\t<h2 class="pull-left navbar-btn"><span class="pull-left"><a href="#/" title="' +
__e( SITE_NAME ) +
'"><img src="img/logo.png" alt="[Image: ' +
__e( SITE_NAME ) +
']" title="' +
__e( SITE_NAME ) +
'" class="img-responsive center-block"/></a></span></h2>\n\t\t<ul class="list-inline pull-left h3 navbar-btn navbar-form">\n\t\t\t <li class="navbar-btn text-muted"><span class="h5">/</span></li>\n\t\t\t<li><span class="text-muted h4">';
 if(user.attributes.full_name != null && user.attributes.full_name != ''){ ;
__p +=
__e( user.attributes.full_name );
 }else{ ;
__p +=
__e( user.attributes.username ) +
' ';
};
__p += '</span></li>\n\t\t</ul>\n\t  </div>\n\t</div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["templates/users_forgot_password"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-info"> Enter your Email, and we will send resetting your password. </div>\n<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">\n<div class="panel panel-default">\n  <div class="panel-heading lead">Forgot Password</div>\n  <div class="panel-body well-lg">\n\t<form id="UserForgotPasswordForm" name="UserForgotPasswordForm" class="form-horizontal col-xs-12">\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputEmail">Email</label>\n\t\t<input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email" required>\n\t  </div>\n\t  <div class="form-group">\n\t\t<label class="sr-only control-label" for="submit2">Send </label>\n\t\t<input type="submit" class="btn btn-primary col-xs-12" id="submitForgotPassword" value="Send">\n\t  </div>\n\t  <ul class="list-inline small text-center">\n\t\t<li><a href="#/users/login" title="Login" class="text-primary">Login</a></li>\n\t\t<li>|</li>\n\t\t<li><a href="#/users/register" title="Register" class="text-primary">Register</a></li>\n\t  </ul>\n\t</form>\n  </div>\n</div>\n</div>';

}
return __p
};

this["JST"]["templates/users_register"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-3">\n<div class="panel panel-default">\n  <div class="panel-heading lead">Register</div>\n  <div class="panel-body well-lg">\n\t<form id="UserRegisterForm" name="UserRegisterForm" class="form-horizontal col-xs-12">\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputEmail">Email</label>\n\t\t<input type="email" required name="email" id="inputEmail" class="form-control" placeholder="Email">\n\t  </div>\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputUsername">Username</label>\n\t\t<input type="name" name="username" id="inputUsername" class="form-control" placeholder="Username" required pattern=".{6,15}" title="minimum 6 characters">\n\t  </div>\n\t  <div class="form-group required">\n\t\t<label class="sr-only control-label" for="inputPassword">Password</label>\n\t\t<input type="password" required name="password" id="inputPassword"class="form-control" placeholder="Password" pattern="[A-Za-z0-9\\S]{6,15}" title="minimum 6 characters and white space not allowed">\n\t  </div>\n\t  <div class="form-group">\n\t\t<label class="sr-only ontrol-label" for="submitRegister">Join Now</label>\n\t\t<input type="submit" class="btn btn-primary col-xs-12" id="submitRegister" value="Join Now">\n\t  </div>\n\t  <ul class="list-inline small text-center">\n\t  \t\t';

			  if(!_.isEmpty(role_links.where({slug: "users_login"}))){
			;
__p += '\n\t\t\t\t<li><a href="#/users/login" title="Login" class="text-primary">Login</a></li>\n\t\t\t';

			  }
			;
__p += '\n\t\t  ';
 if(!_.isEmpty(role_links.where({slug: "users_forgotpassword"}))){ ;
__p += '\n\t\t  \t<li>|</li>\n\t\t\t<li><a href="#/users/forgotpassword" title="Forgot your password?" class="text-primary">Forgot your password?</a></li>\n\t\t\t\n\t\t\t';
 };
__p += '\n\t\t</ul>\n\t</form>\n  </div>\n</div>\n</div>';

}
return __p
};