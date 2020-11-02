<!-- IF rooms.length -->
{{{each rooms}}}
<li class="<!-- IF ../unread -->unread<!-- ENDIF ../unread -->" data-roomid="{rooms.roomId}">
	<strong class="room-name">
		<!-- IF !rooms.lastUser.uid -->
		<span>[[modules:chat.no-users-in-room]]</span>
		<!-- ELSE -->
		<!-- IF rooms.roomName -->{rooms.roomName}<!-- ELSE -->{rooms.usernames}<!-- ENDIF rooms.roomName -->
		<!-- ENDIF !rooms.lastUser.uid -->
	</strong>
	<div class="avatar-placeholder"></div>
	{{{each rooms.users}}}
	<!-- IF @first -->
	<div class="main-avatar">
		<a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
	</div>
	<!-- ENDIF @first -->
	{{{end}}}

	<ul class="members">
		{{{each rooms.users}}}
		<li>
			<a href="{config.relative_path}/user/{rooms.users.userslug}">{buildAvatar(rooms.users, "sm", true)}</a>
		</li>
		{{{end}}}
	</ul>

	<span class="teaser-content">{rooms.teaser.content}</span>
	<span class="teaser-timestamp timeago pull-right" title="{rooms.teaser.timestampISO}"></span>
</li>
{{{end}}}
<!-- ELSE -->
<li class="no_active"><a href="#">[[modules:chat.no_active]]</a></li>
<!-- ENDIF rooms.length -->