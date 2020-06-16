/**
 * Internal dependencies
 */
import {
	FontFamilyType,
	ConfirmMessageType,
	PollStatus,
	ClosedPollState,
} from './constants';
import { __ } from 'lib/i18n';

/*
 * Note: Any changes made to the attributes definition need to be duplicated in
 *       Crowdsignal_Forms\Frontend\Blocks\Crowdsignal_Forms_Poll_Block::attributes()
 *       inside includes/frontend/blocks/class-crowdsignal-forms-poll-block.php.
 */
export default {
	pollId: {
		type: 'number',
		default: null,
	},
	isMultipleChoice: {
		type: 'boolean',
		default: false,
	},
	title: {
		type: 'string',
		default: __( 'Untitled Poll' ),
	},
	question: {
		type: 'string',
		default: '',
	},
	note: {
		type: 'string',
		default: '',
	},
	answers: {
		type: 'array',
		default: [ {}, {}, {} ],
		items: {
			type: 'object',
			properties: {
				answerId: {
					type: 'number',
					default: null,
				},
				text: {
					type: 'string',
					default: '',
				},
			},
		},
	},
	submitButtonLabel: {
		type: 'string',
		default: __( 'Submit' ),
	},
	submitButtonTextColor: {
		type: 'string',
	},
	submitButtonBackgroundColor: {
		type: 'string',
	},
	confirmMessageType: {
		type: 'string',
		default: ConfirmMessageType.RESULTS,
	},
	customConfirmMessage: {
		type: 'string',
	},
	redirectAddress: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	borderColor: {
		type: 'string',
	},
	borderWidth: {
		type: 'number',
		default: 2,
	},
	borderRadius: {
		type: 'number',
		default: 0,
	},
	hasBoxShadow: {
		type: 'boolean',
		default: true,
	},
	fontFamily: {
		type: 'string',
		default: FontFamilyType.THEME_DEFAULT,
	},
	hasOneResponsePerComputer: {
		type: 'boolean',
		default: false,
	},
	randomizeAnswers: {
		type: 'boolean',
		default: false,
	},
	blockAlignment: {
		type: 'string',
		default: 'center',
	},
	pollStatus: {
		type: 'string',
		default: PollStatus.OPEN,
	},
	closedPollState: {
		type: 'string',
		default: ClosedPollState.SHOW_RESULTS,
	},
	closedAfterDateTime: {
		type: 'string',
		default: null,
	},
};
