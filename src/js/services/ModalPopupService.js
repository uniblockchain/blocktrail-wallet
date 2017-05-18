angular.module('blocktrail.wallet').factory(
    'ModalPopupService',
    function(settingsService, $state, $translate, CONFIG, $ionicPopover, $rootScope) {

        var popover = function(title, body, unclosable) {

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

            return $ionicPopover.fromTemplateUrl('templates/misc/popover.modalpopup.html', {
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
