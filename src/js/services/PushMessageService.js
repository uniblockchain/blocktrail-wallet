angular.module('blocktrail.wallet').factory(
    'PushMessageService',
    function(settingsService, $state, $translate, CONFIG, $ionicPopover, $rootScope) {

        var popover = function(title, body, unclosable) {

            console.log("well im here at least");

            var modalScope = $rootScope.$new(true);
            modalScope.body = body;
            modalScope.title = title;
            modalScope.appstoreButton = false;
            modalScope.unclosable = !!unclosable;

            // size class, small when unclosable (no footer)
            modalScope.popoverSizeCls = modalScope.unclosable ? "small-popover" : "medium-popover";

            modalScope.openAppStore = function() {
                //AppRateService.navigateToAppStore();
                modalScope.popover.destroy();
            };

            return $ionicPopover.fromTemplateUrl('templates/misc/popover.pushmessage.html', {
                scope: modalScope,
                hardwareBackButtonClose: !unclosable
            }).then(function(popover) {
                modalScope.popover = popover;
                popover.hideDelay = 1000;
                popover.show();
            });
        };

        return {
            popover: popover
        };
    }
);
