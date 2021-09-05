# ng-Vs-react-Vs-vue-Vs-other
# install & setup 
- how to install 

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
| npm install -g @angular/cli  | no need to install anything | npm install -g @vue/cli |

- how to create app

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|   ng new your_project_name  | npx create-react-app your_project_name | vue create your_project_name |

- how to run project

| --- |          angular           |         reactjs         |           vuejs          |
| --- |          -------           |         -------         |           -----          |
| --- | cd your_project_directory  | cd your_project_directory | cd your_project_directory |
| --- | ng serve                   | npx react-scripts start | npx vue-cli-service serve |
| or,if set script <br/> in package.js | npm start | npm start | npm run serve |

- how project look like 

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
| ![Scree](https://user-images.githubusercontent.com/58136550/131382361-5f611601-6ae2-4ddb-afeb-da70fad3dd17.png) | ![Sc](https://user-images.githubusercontent.com/58136550/131382271-cac1e3fd-4017-4b32-9c2e-5b52c0922835.png) | ![Sc](https://user-images.githubusercontent.com/58136550/131382179-6e8b999c-9d95-4fb8-9588-c139552b6ac7.png) |

- new keyword

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
| *ngFor, *ngIf, ngModel, @input, @output, @ViewChild, forChild, forRoot | render, return, fragment, props, state, super, ref, | v-if, v-else-if, v-else, v-show, v-model, v-for, :key, v-bind:href, :href, :disable,:class, :style,:v-on:, props,computed, template, methods |

- lifecycle hook: we can run code different points 

|          angular           |         reactjs         |           vuejs          |
|          -------           |         ------         |           -------          |
| ngOnInit | componentWillMount| beforeCreate: this fires before the component is even fully create and it's at the very start of it's initialization,inside hook we can't access any data from the data object or any template elements. |
| ngOnChanges | componentDidMount | created: when it's created the components we fired the created hook and this is when the component has been created but not yet mounted to the dom. now we can access the data now,but we still can't access the template. |
| ngDoCheck | componentWillReceiveProps | beforeMount: just before our component is mounted to the DOM. in here we can now access all of our data, events and templates |
| ngAfterContentInit | shouldComponentUpdate | mounted: this is popular place to make request if you need data for your component. |
| ngAfterContentChecked | componentWillUpdate | beforeUpdate: we know that data can change either over time use events like clicking buttons, means when that data updates and changes, then we fire the before update hook |
| ngAfterViewInit | componentDidUpdate | updated: once the average added to the DOM, we fire the updated hook and that's after all of the updates |
| ngOnDestroy | componentWillUnmount | beforeUnmount: when the component is no longer needs on the screen in the browser, it's removed. this point we fire two final hook beforeUnmount and unmounted |
| ngAfterViewChecked | componentDidCatch | unmounted: when the component is no longer needs on the screen in the browser, it's removed. this point we fire two final hook beforeUnmount and unmounted, which we could use for any component cleanup. |
| ----- |         -------         |           -----          |
| -------           |         -------         |           -----          |
| -------           |         -------         |           -----          |
| -------           |         -------         |           -----          |

- event

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |


- how to debug code by console.log()

|          angular           |         reactjs         |           vuejs          |
| ---- | ---- | ----- |
| ![Scr](https://user-images.githubusercontent.com/58136550/131385335-e9064218-c319-4a15-9559-ebd38e3c2f1d.png) | ![Scr](https://user-images.githubusercontent.com/58136550/131387001-048b88c7-b6f1-4673-a07b-c6ae9de91dca.png) | ![Sc](https://user-images.githubusercontent.com/58136550/131387954-c212b402-b117-4d76-9b9c-1f64624e36c2.png) |

- how to variable value show on web page

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
| ![Sc](https://user-images.githubusercontent.com/10520882/131722731-daf5d8c8-7085-4c8b-a86a-88315ea8bf9c.png) | ![s](https://user-images.githubusercontent.com/10520882/131724279-cf7e70f9-a890-4870-9374-e6e853e51e8c.png) |           -----          |


- for loop

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- if else

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- show and hide

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |


- how to show component

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- how to show value from other component 

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- how to set path or routing 

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- how to reuse component

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- props & states

|          angular           |         reactjs         |           vuejs          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |
|          -------           |         -------         |           -----          |

- 



