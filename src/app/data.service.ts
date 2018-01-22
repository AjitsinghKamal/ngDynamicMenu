import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	constructor() { }

	navData = [
		{
			'Software Products': [
				{
					'Programming Languages': [
						'Java API',
						'Python API'
					]
				},
				{
					'Documentation': [
						'Java Docs',
						'Python Docs',
						{
							'HTTP Docs': [
								'REST Docs',
								'SOAP Docs'
							]
						}
					]
				},
				'Try It!'
			]
		},
		{
			'Cloud Products': [
				'SAAS',
				'PAAS',
				'IAAS'
			]
		},
		{
			'About Us': [
				{
					'Locations': [
						{
							'India': [
								'Delhi',
								{
									'Mumbai': [
										'Lower Parel',
										'Goregaon'
									]
								},
								'Bangalore'
							]
						},
						'USA',
						'Singapore'
					]
				},
				'Founders',
				'Advisors'
			]
		},
		'Contact Us'
	];

	getData() {
		return this.navData;
	}


}
