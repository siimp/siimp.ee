<?php
include __DIR__ . "/../config.php";

?>

<div class="panel panel-default">
  <div class="panel-heading">
    <div class="row">
      <a ng-href="{{member.topicUrl}}" target="_blank"><h2 class="col-xs-10" ng-bind="member.topic"></h2></a>
      <div class="col-xs-2">
        <div class="leave remove selectable" ng-click="member.leave()">
          <span class="glyphicon glyphicon-remove"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="panel-body" style="white-space: pre-line">
    <div ng-bind-html="member.description"></div>
  </div>
</div>

<div class="row">
  <div class="col-lg-2 col-md-3 col-xs-4" ng-repeat="card in member.cards">
    <div class="card-container">
      <div class="card selectable" ng-class="{active: card.active, confirmed: card.confirmed}" ng-click="member.selectCard(card)">
        <div class="inner">
          <span class="card-label" ng-bind-html="card.value"></span>
              </div>
      </div>
    </div>
  </div>
</div>

<div class="container" style="padding-top: 8em;">
<div class="row">
<div class="pull-right">
<div id="andreas-mode">
	<span>Super Andreas mode: </span>
	<label class="switch">
	  <input id="andreas-mode-switch" type="checkbox" onchange="toggleAndreasMode(this.checked)">
	  <span class="switch-slider round"></span>
	</label>
</div>
</div>
</div>
</div>
<script src="resources/script.js"></script>
<div id="foreground">
    <span id="shot"></span>
</div>
<img id="cursor-gun" src="/resources/image/cursor.png" style="display: none"/>
<canvas id="gameCanvas" width="1" height="1" style="display: none"></canvas>
<script src="resources/js/types.js"></script>
<script src="resources/js/init.js"></script>
<script src="resources/js/utils.js"></script>
<script src="resources/js/assets.js"></script>
<script src="resources/js/render.js"></script>
<script src="resources/js/logic.js"></script>
<script src="resources/js/main.js"></script>
<script src="resources/js/joke.js"></script>