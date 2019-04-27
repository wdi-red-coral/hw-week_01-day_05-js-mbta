const line  =  [ 
{
     Red:[
           'South Station',
           'Park Street',
           'Kendall',
           'Central',
           'Harvard',
           'Porter',
           'Davis',
           'Alewife'   
         ],
     Green:[

         'Government Center' ,
         'Park Street',
          'Boylston',
          'Arlington',
          'Copley',
          'Hynes',
          'Kenmore'

     ],
     Orange:[
         ' North Station',
          'Haymarket',
          'Park Street',
          'State',
          'Downtown Crossing',
          'Chinatown',
          'Back Bay',
          'Forest Hills'
     ]

},
]


const stopsBetweenStations = function(col1,st1,col2,st2,){
     let start = line[0][col1].indexOf(st1)
     let end = line[0][col2].indexOf(st2)
     let stops = 0;
     if(col1===col2){
          if(end<start){
               let tmp = start;
               start = end;
               end = tmp;
          }
          
          for(start ; start<end; start++ )
               stops++;
          return stops;
          

     }
     let start1 = line[0][col1].indexOf('Park Street')
     let end1 = line[0][col2].indexOf('Park Street')
     if(start1<start){
          let tmp = start;
          start = start1;
          start1 = tmp;
     }
     for(start; start<start1; start++)
          stops++;


     
     if(end<end1){
          let tmp = end1;
          end1 = end;
          end = tmp;
     }
     for(end1; end1<end; end1++)
          stops++;
     return stops;

}




