export default {
	id: '1',
	type: "object",
	properties: {
		NOT_NAME_FILED_$1: {
			id: '123',
			type: "object",
			label: "互动名称：",
			widget: "Row",
			properties: {
				name: {
					type: "string",
					widget: "Input",
					props: {
						maxLength: 20,
						showLimitHint: true,
					},
					description: "特殊情况说明",
				}
			}
		},
		NOT_NAME_FILED_$2: {
			id: '124',
			type: "object",
			label: "互动时间：",
			widget: "Row",
			properties: {
				start_date: {
					id: '112323',
					type: "string",
					widget: "DatePicker",
					props: {
						showTime: true,
						value: "{{ $formData.days !=undefined ? ($formData.start_date = new Date().toLocaleDateString()) : '' }}"
					},
					description: "互动开始时间",
				},
				NOT_NAME_FILED_$node: {
					id: '123333',
					type: "string",
					widget: "Node",
					label: "",
					props: {
						children: "<span style='padding: 0 10px;'>-</span>"
					},
					description: "互动开始时间",
				},
				end_date: {
					id: '121231233',
					type: "string",
					widget: "DatePicker",
					props: {
						showTime: true,
						value: "{{ $formData.days !='undefined' ? $formData.end_date = new Date(new Date().getTime() + Number($formData.days) * 1000*3600*24).toLocaleDateString() : '' }}"
					},
					description: "互动结束时间",
				},
				NOT_NAME_FILED_$3: {
					id: '122222223',
					type: "object",
					widget: "Row",
					properties: {
						one_day: {
							id: '11123',
							type: "string",
							widget: "Button",
							props: {
								type: 'primary',
								loading: false
							},
							enumArray: [{
								label: '1天',
								value: '1'
							}, {
								label: '7天',
								value: '7'
							}, {
								label: '15天',
								value: '15'
							}, {
								label: '30天',
								value: '30'
							}],
							widget: "Buttons",
						}
					}
				},
			}
		},
		NOT_NAME_FILED_$10: {
			id: '1221179783',
			type: "object",
			label: "显示平台：",
			widget: "Row",
			properties: {
				platform: {
					id: '1974323',
					type: "string",
					widget: "Checkbox",
					text: "淘宝",
					data: 'taobao',
					props: {
						checked: "{{$formData.platform}}"
					},
					description: "显示平台"
				},
				NOT_NAME_FILED_$100: {
					id: '107323',
					type: "object",
					widget: "Row",
					properties: {
						notice: {
							id: '122121212213',
							type: "string",
							widget: "Notice",
							props: {
								padding: '5px',
								borderColor: '#1dc11d',
								children: "消费者在以上所有平台均可以参与该互动；勾选与否仅代表是否在互动赢家在对应平台是否展示该互动； 勾选表示显示；不勾选代表不显示，可通过自主装修互动链接实现仅在特定位置展示。"
							},
							description: ""
						}
					}
				},
			}
		},
		NOT_NAME_FILED_$11: {
			id: '1239876',
			type: "object",
			label: "参与等级：",
			widget: "Row",
			properties: {
				grade: {
					id: '15678923',
					// 定义数组多选项，返回的是字符串，还是数组
					type: "array",
					enumArray: [{
						label: '非会员',
						value: '0'
					}, {
						label: '一级会员',
						value: '1'
					}, {
						label: '二级会员',
						value: '2'
					}, {
						label: '三级会员',
						value: '3'
					}],
					widget: "Buttons",
				},
			}
		},
		NOT_NAME_FILED_$12: {
			id: '12asdf3',
			type: "object",
			label: "<div><span style='color:red'>*</span> 关注店铺奖励：</div>",
			widget: "Row",
			properties: {
				awardType: {
					id: '12asdfa3',
					type: "array",
					enumArray: [{
						label: '积分',
						value: 'integration'
					}, {
						label: '优惠券',
						value: 'coupon'
					}, {
						label: '抽奖',
						value: 'lottery'
					}, {
						label: '支付宝红包',
						value: 'alipayPacket'
					}, {
						label: '流量钱包',
						value: 'flowWallet'
					}, {
						label: '电子券',
						value: 'electronic'
					}, {
						label: '实物礼品',
						value: 'PhysicalGifts'
					}],
					widget: "Checkbox",
				},
				NOT_NAME_FILED_$12: {
					id: '3ewwewe123',
					type: "object",
					label: "",
					widget: "Row",
					properties: {
						integration: {
							id: '8ujksadf123',
							type: "string",
							widget: "Input",
							props: {
								addonTextAfter: '积分'
							},
							hidden: "{{ !$formData.awardType || $formData.awardType == 'undefined' || $formData.awardType.toString().indexOf('integration') == -1 }}",
							description: "",
						}
					}
				}
			}
		},
		tip: {
			id: '1298kasdf3',
			type: "string",
			label: "信息提示",
			widget: "Message",
			hidden: "{{$formData.required}}",
			props: {
				type: 'success',
				children: '<p>这是一段测试内容</p>'
			}
		},
		user: {
			id: 'asdf12sdf3',
			type: "string", // 值的类型
			label: "名称", // 标题
			widget: "Input", // 信息录入元件
			help: "帮助信息", // 额外详细的帮助信息
			description: "名称请填写真实名称", // 简短的描述信息
			props: {
				// 元件组件的配置
				defaultValue: "{{$ref.label || '默认用户名'}}"
			},
			rules: {
				// 校验规则
				required: true,
				pattern: "^d+$",
				min: 2,
				max: 10,
				maxLength: 10
			},
			message: {
				// 校验规则错误提示
				required: "必填项",
				pattern: "格式不正确",
				min: "xx不能小于{{$ref.rules.min}}",
				max: "xx不能大于{{$ref.rules.max}}",
				maxLength: "长度不能超过{{$ref.rules.maxLength}}"
			},
			hidden: false // 组件是否隐藏
		},
		NOT_NAME_FILED_$0: {
			id: '191729837921323',
			type: "object",
			label: "不养宠物",
			widget: "Row",
			properties: {
				required: {
					id: '1ssasdf23',
					type: "boolean",
					widget: "Checkbox",
					label: ""
				},
				description: {
					id: '12alsdjlfjasdf3',
					type: "string",
					widget: "Input",
					description: "特殊情况说明",
					hidden: "{{$formData.required}}"
				}
			}
		},
		pet: {
			id: '1asdfadsxcvc23',
			type: "object",
			label: "宠物信息",
			widget: "Card",
			hidden: "{{$formData.required}}",
			properties: {
				name: {
					id: '12qwerwqer3',
					type: "string",
					label: "宠物名称",
					widget: "Input",
					rules: {
						required: true
					},
					message: {
						required: "宠物名称必须填写"
					}
				},
				gender: {
					id: '147645674523',
					type: "string",
					label: "宠物性别",
					widget: "Select"
				}
			}
		}
	}
};
