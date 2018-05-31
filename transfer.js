var steem = require('steem');
var cron = require('node-cron');

cron.schedule('* * * * *', function() {

steem.api.getAccounts(['boostme'], function(err, result){
			console.log(err, result)
			let sbdReward = result[0].reward_sbd_balance
			let steemReward = result[0].reward_steem_balance
			let steemPowerInVests = result[0].reward_vesting_balance

			steem.broadcast.claimRewardBalance('private-posting-key', 'your-account', steemReward, sbdReward, steemPowerInVests, function(err, result) {
				console.log(err, result);
			});
	})

var wif = 'your-active-key'
var from = 'my-account'
var to = 'another-account'
var memo = '100.000 SBD'
var memo = 'memo'

steem.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
 console.log(err, result);
});

}
