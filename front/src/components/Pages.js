import React, {Component} from 'react';
import Page from './Page';
class Pages extends Component{
   constructor(props){
    super(props);

    this.state = {
        pages:[
            {
                id: 1,
                name: 'awax',
                description: 'opis strony',
                website: 'www.awax.pl',
                github: 'www.awax.github.com'
            },
            {
                id: 2,
                name: 'lp',
                description: ';anding page',
                website: 'www.lp.pl',
                github: 'www.lp.github.com'
            }
        ]
    }

   }
   

   render(){
       return(
           <div>
               {this.state.pages.map(page=>(
                <div>
                    <Page name={page.name} description={page.description} github={page.github} website={page.website} />
                </div>
               ))}
           </div>
       )
   }
}

export default Pages;