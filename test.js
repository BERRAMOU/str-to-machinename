import test from 'ava';
import strToMachinename from '.';

test('main', t => {
	t.is(strToMachinename('', '-'), '');
	t.is(strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '_'), 'cest_une_phrase_francaise_avec_des_accente_eacaceiu');
	t.is(strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '-'), 'cest-une-phrase-francaise-avec-des-accente-eacaceiu');
	t.is(strToMachinename('C\'est une phrase française avec des accenté éàçàçéìù', '/'), 'cest/une/phrase/francaise/avec/des/accente/eacaceiu');
});
