require('./firstComponent.scss');
import angular from 'angular';


// this is a nice way to create components
class FirstComponentClass {


  // @ngInject
  constructor($scope/*, WebapiServic*/,$timeout) {
    this.name = 'World';
    // this.WebapiService = WebapiService;
    this.errorMessage = '';
    this.dataFromServer = null;
    this.timeout = $timeout;

  var colorFunction = function() {
    return function(d, i) {
      return this.data[i].color;
    };
  }


    this.options = {
      chart: {
        type: 'sunburstChart',
        height: 450,
        color: /*colorFunction(),*/d3.scale.category20b(),
        duration: 250,
        callback:function(chart){

         chart.dispatch.on('renderEnd',()=>{d3.selectAll("path").attr("stroke", "red");
          console.log(d3.selectAll("path").attr("stroke", "red"));
       })
        },
        dispatch:{
          renderEnd:()=>{d3.selectAll("path").style("stroke", "red");
          console.log(d3.selectAll("path").style("stroke", "red"));
       }
        }
      }

    };



///////////start this.data
this.data =  [
    { "color":"black",
      "level":"Groupe",
      "name":"Animalia",
      "children": [
        { 
          "color":"#240024",
          "level":"Embranchement",
          "name":"Acanthocephala"
        },
        {
          "color":"#24001e",
          "level":"Embranchement",
          "name":"Annelida"
        },
        { 
          "color":"#240018",
          "level":"Embranchement",
          "name":"Arthropoda"
        },   
        {
          "color":"#240012",
          "level":"Embranchement",
          "name":"Brachiopoda"
        },   
        {
          "color":"#24000c",
          "level":"Embranchement",
          "name":"Bryozoa"
        },   
        {
         "color":"#240006",
          "level":"Embranchement",
          "name":"Cephalorhyncha"
        },                                              
        { 
          "color":"#240000",
          "level":"Embranchement",
          "name":"Chaetognatha",
          "children":[
            {
              "level":"Classe",
              "name":"Sagittoidea",
              "children":[
                {
                  "level":"Ordre",
                  "name":"Aphragmophora",
                  "children":[
                    {
                    "level":"Super Famille",
                    "name":"data",
                    "children":[
                      {
                        "level":"Famille",
                        "name":"Bathybelidae",
                        "children":[
                          {
                            "level":"Genre",
                            "name":"Bathybelos",
                            "children":[
                              {
                                "level":"Espèce",
                                "name":"typhlops"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "level":"Famille",
                        "name":"Krohnittidae",
                        "children":[
                          {
                            "level":"Genre",
                            "name":"Krohnitta",
                            "children":[
                              {
                                "level":"Espèce",
                                "name":"balagopali"
                              },
                              {
                                "level":"Espèce",
                                "name":"pacifica"
                              },
                              {
                                "level":"Espèce",
                                "name":"subtilis"
                              }                              
                            ]
                          }
                        ]                        
                      }
                    ]                     
                    }
                  ]
                }
              ]
            }
          ]
        },
        { 
          "color":"#240700",  
          "level":"Embranchement",
          "name":"Chordata",
          "children": [
            {
              "level":"Classe",
              "name": "Mammalia",
              "children": [
                {
                  "level":"Ordre",
                  "name": "Carnivora",
                  "children": [
                    {
                      "level":"Super Famille",
                      "children" : [
                        {
                          "level" :"Famille",
                          "name":"Felidae",
                          "children":[
                            {
                              "level":"Genre",
                              "name":"Felis",
                              "children":[
                                {
                                  "level":"Espèce",
                                  "name" : "Bieti"
                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Catus"
                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Chaus",
                                  "children":[
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Affinis"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Chaus"                                      
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Fulvidina"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Furax"                                      
                                    },
                                     {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Kelaarti"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Kutas"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Mainmanah"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Nilotica"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Oxiana"                                      
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Prateri"                                      
                                    }                                                                                                                                                                                                                                                                                                                 
                                  ]

                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Manul",
                                  "children":[
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Ferruginea"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Manul"                                      
                                    },    
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Nigripecta"                                      
                                    }                                 
                                  ]
                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Margarita",
                                  "children":[
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Airensis"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Harrisoni"                                      
                                    },    
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Margarita"                                      
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Meinertzhageni"                                      
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "scheffeli"                                      
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "thinobia"                                      
                                    }                                                                                                                                              
                                  ]                                  
                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Nigripes"
                                },  
                                {
                                  "level":"Espèce",
                                  "name" : "Silveris"
                                }                            
                              ]
                            },
                            {
                              "level":"Genre",
                              "name":"Panthera",
                              "children":[
                                 {
                                  "level":"Espèce",
                                  "name" : "Leo",
                                  "children": [
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Azandica"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Bleyenberghi"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Leo"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Melanochaita"
                                    },     
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Nubica"
                                    },   
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Senegalensis"
                                    }                                                                                                                                                                                                                                           
                                  ]

                                },
                                {
                                  "level":"Espèce",
                                  "name" : "Onca",
                                  "children": [
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Arizonensis"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Centralis"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Goldmani"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "hernendesii"
                                    },     
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Onca"
                                    },   
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Palustris"
                                    },    
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Paraguensis"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Peruviana"
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "veraecrusis"
                                    }                                                                                                                                                                                                                                            
                                  ]

                                },
                                {
                                  "level":"Espèce",
                                  "name":"tigris",
                                  "children":[
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Altaica"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Amoyensis"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Balica"
                                    },     
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Corbetti"
                                    },   
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Sondaica"
                                    },    
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Sumatrae"
                                    },
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Tigris"
                                    }, 
                                    {
                                      "level": "Taxon infraspécifique",
                                      "name" : "Virgata"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },        
        {
          "color":"#240f00",
          "level":"Embranchement",
          "name":"Cnidaria"
        },
        {
          "color":"#241600",
          "level":"Embranchement",
          "name":"Ctenophora"
        }, 
        {
          "color":"#241d00",
          "level":"Embranchement",
          "name":"Cycliophora"
        },
        {
          "color":"#242400",
          "level":"Embranchement",
          "name":"Dicyemida"
        }, 
        {
          "color":"#1e2400",
          "level":"Embranchement",
          "name":"Echinodermata"
        },  
        {
          "color":"#182400",
          "level":"Embranchement",
          "name":"Entoprocta"
        },    
        {
          "color":"#122400",
          "level":"Embranchement",
          "name":"Gastrotricha"
        },  
        {
          "color":"#0c2400",
          "level":"Embranchement",
          "name":"Gnathostomulida"
        },    
        {
          "color":"#062400",
          "level":"Embranchement",
          "name":"Hemichordata"
        },
         {
          "color":"#002400",
          "level":"Embranchement",
          "name":"Micrognathozoa"
        }, 
         {
          "color":"#002407",
          "level":"Embranchement",
          "name":"Mollusca"
        },   
        {
          "color":"#00240f",
          "level":"Embranchement",
          "name":"Myxozoa"
        },
        {
          "color":"#002416",
          "level":"Embranchement",
          "name":"Nematoda"
        },  
        {
          "color":"#00241d",
          "level":"Embranchement",
          "name":"Nematomorpha"
        },
        {
          "color":"#002424",
          "level":"Embranchement",
          "name":"Nemertea"
        },
        {
          "color":"#001e24",
          "level":"Embranchement",
          "name":"Onychophora"
        },
        {
          "color":"#001824",
          "level":"Embranchement",
          "name":"Phoronida"
        },
        {
          "color":"#001224",
          "level":"Embranchement",
          "name":"Placozoa"
        },
        {
          "color":"#000c24",
          "level":"Embranchement",
          "name":"Platyhelminthes"
        },
        {
          "color":"#000624",
          "level":"Embranchement",
          "name":"Porifera"
        },
        {
          "color":"#000024",
          "level":"Embranchement",
          "name":"Rotifera"
        },
        {
          "color":"#070024",
          "level":"Embranchement",
          "name":"Sipuncula"
        },
        {
          "color":"#0f0024",
          "level":"Embranchement",
          "name":"Tardigrada"
        },
        {
          "color":"#160024",
          "level":"Embranchement",
          "name":"Xenacoelomorpha"
        }
      ]
    }];/*,
                {
                    "name": "animate",
                    "children": [
                        {"name": "Easing", "size": 17010},
                        {"name": "FunctionSequence", "size": 5842},
                        {
                            "name": "interpolate",
                            "children": [
                                {"name": "ArrayInterpolator", "size": 1983},
                                {"name": "ColorInterpolator", "size": 2047},
                                {"name": "DateInterpolator", "size": 1375},
                                {"name": "Interpolator", "size": 8746},
                                {"name": "MatrixInterpolator", "size": 2202},
                                {"name": "NumberInterpolator", "size": 1382},
                                {"name": "ObjectInterpolator", "size": 1629},
                                {"name": "PointInterpolator", "size": 1675},
                                {"name": "RectangleInterpolator", "size": 2042}
                            ]
                        },
                        {"name": "ISchedulable", "size": 1041},
                        {"name": "Parallel", "size": 5176},
                        {"name": "Pause", "size": 449},
                        {"name": "Scheduler", "size": 5593},
                        {"name": "Sequence", "size": 5534},
                        {"name": "Transition", "size": 9201},
                        {"name": "Transitioner", "size": 19975},
                        {"name": "TransitionEvent", "size": 1116},
                        {"name": "Tween", "size": 6006}
                    ]
                },
                {
                    "name": "data",
                    "children": [
                        {
                            "name": "converters",
                            "children": [
                                {"name": "Converters", "size": 721},
                                {"name": "DelimitedTextConverter", "size": 4294},
                                {"name": "GraphMLConverter", "size": 9800},
                                {"name": "IDataConverter", "size": 1314},
                                {"name": "JSONConverter", "size": 2220}
                            ]
                        },
                        {"name": "DataField", "size": 1759},
                        {"name": "DataSchema", "size": 2165},
                        {"name": "DataSet", "size": 586},
                        {"name": "DataSource", "size": 3331},
                        {"name": "DataTable", "size": 772},
                        {"name": "DataUtil", "size": 3322}
                    ]
                },
                {
                    "name": "display",
                    "children": [
                        {"name": "DirtySprite", "size": 8833},
                        {"name": "LineSprite", "size": 1732},
                        {"name": "RectSprite", "size": 3623},
                        {"name": "TextSprite", "size": 10066}
                    ]
                },
                {
                    "name": "flex",
                    "children": [
                        {"name": "FlareVis", "size": 4116}
                    ]
                },
                {
                    "name": "physics",
                    "children": [
                        {"name": "DragForce", "size": 1082},
                        {"name": "GravityForce", "size": 1336},
                        {"name": "IForce", "size": 319},
                        {"name": "NBodyForce", "size": 10498},
                        {"name": "Particle", "size": 2822},
                        {"name": "Simulation", "size": 9983},
                        {"name": "Spring", "size": 2213},
                        {"name": "SpringForce", "size": 1681}
                    ]
                },
                {
                    "name": "query",
                    "children": [
                        {"name": "AggregateExpression", "size": 1616},
                        {"name": "And", "size": 1027},
                        {"name": "Arithmetic", "size": 3891},
                        {"name": "Average", "size": 891},
                        {"name": "BinaryExpression", "size": 2893},
                        {"name": "Comparison", "size": 5103},
                        {"name": "CompositeExpression", "size": 3677},
                        {"name": "Count", "size": 781},
                        {"name": "DateUtil", "size": 4141},
                        {"name": "Distinct", "size": 933},
                        {"name": "Expression", "size": 5130},
                        {"name": "ExpressionIterator", "size": 3617},
                        {"name": "Fn", "size": 3240},
                        {"name": "If", "size": 2732},
                        {"name": "IsA", "size": 2039},
                        {"name": "Literal", "size": 1214},
                        {"name": "Match", "size": 3748},
                        {"name": "Maximum", "size": 843},
                        {
                            "name": "methods",
                            "children": [
                                {"name": "add", "size": 593},
                                {"name": "and", "size": 330},
                                {"name": "average", "size": 287},
                                {"name": "count", "size": 277},
                                {"name": "distinct", "size": 292},
                                {"name": "div", "size": 595},
                                {"name": "eq", "size": 594},
                                {"name": "fn", "size": 460},
                                {"name": "gt", "size": 603},
                                {"name": "gte", "size": 625},
                                {"name": "iff", "size": 748},
                                {"name": "isa", "size": 461},
                                {"name": "lt", "size": 597},
                                {"name": "lte", "size": 619},
                                {"name": "max", "size": 283},
                                {"name": "min", "size": 283},
                                {"name": "mod", "size": 591},
                                {"name": "mul", "size": 603},
                                {"name": "neq", "size": 599},
                                {"name": "not", "size": 386},
                                {"name": "or", "size": 323},
                                {"name": "orderby", "size": 307},
                                {"name": "range", "size": 772},
                                {"name": "select", "size": 296},
                                {"name": "stddev", "size": 363},
                                {"name": "sub", "size": 600},
                                {"name": "sum", "size": 280},
                                {"name": "update", "size": 307},
                                {"name": "variance", "size": 335},
                                {"name": "where", "size": 299},
                                {"name": "xor", "size": 354},
                                {"name": "_", "size": 264}
                            ]
                        },
                        {"name": "Minimum", "size": 843},
                        {"name": "Not", "size": 1554},
                        {"name": "Or", "size": 970},
                        {"name": "Query", "size": 13896},
                        {"name": "Range", "size": 1594},
                        {"name": "StringUtil", "size": 4130},
                        {"name": "Sum", "size": 791},
                        {"name": "Variable", "size": 1124},
                        {"name": "Variance", "size": 1876},
                        {"name": "Xor", "size": 1101}
                    ]
                },
                {
                    "name": "scale",
                    "children": [
                        {"name": "IScaleMap", "size": 2105},
                        {"name": "LinearScale", "size": 1316},
                        {"name": "LogScale", "size": 3151},
                        {"name": "OrdinalScale", "size": 3770},
                        {"name": "QuantileScale", "size": 2435},
                        {"name": "QuantitativeScale", "size": 4839},
                        {"name": "RootScale", "size": 1756},
                        {"name": "Scale", "size": 4268},
                        {"name": "ScaleType", "size": 1821},
                        {"name": "TimeScale", "size": 5833}
                    ]
                },
                {
                    "name": "util",
                    "children": [
                        {"name": "Arrays", "size": 8258},
                        {"name": "Colors", "size": 10001},
                        {"name": "Dates", "size": 8217},
                        {"name": "Displays", "size": 12555},
                        {"name": "Filter", "size": 2324},
                        {"name": "Geometry", "size": 10993},
                        {
                            "name": "heap",
                            "children": [
                                {"name": "FibonacciHeap", "size": 9354},
                                {"name": "HeapNode", "size": 1233}
                            ]
                        },
                        {"name": "IEvaluable", "size": 335},
                        {"name": "IPredicate", "size": 383},
                        {"name": "IValueProxy", "size": 874},
                        {
                            "name": "math",
                            "children": [
                                {"name": "DenseMatrix", "size": 3165},
                                {"name": "IMatrix", "size": 2815},
                                {"name": "SparseMatrix", "size": 3366}
                            ]
                        },
                        {"name": "Maths", "size": 17705},
                        {"name": "Orientation", "size": 1486},
                        {
                            "name": "palette",
                            "children": [
                                {"name": "ColorPalette", "size": 6367},
                                {"name": "Palette", "size": 1229},
                                {"name": "ShapePalette", "size": 2059},
                                {"name": "SizePalette", "size": 2291}
                            ]
                        },
                        {"name": "Property", "size": 5559},
                        {"name": "Shapes", "size": 19118},
                        {"name": "Sort", "size": 6887},
                        {"name": "Stats", "size": 6557},
                        {"name": "Strings", "size": 22026}
                    ]
                },
                {
                    "name": "vis",
                    "children": [
                        {
                            "name": "axis",
                            "children": [
                                {"name": "Axes", "size": 1302},
                                {"name": "Axis", "size": 24593},
                                {"name": "AxisGridLine", "size": 652},
                                {"name": "AxisLabel", "size": 636},
                                {"name": "CartesianAxes", "size": 6703}
                            ]
                        },
                        {
                            "name": "controls",
                            "children": [
                                {"name": "AnchorControl", "size": 2138},
                                {"name": "ClickControl", "size": 3824},
                                {"name": "Control", "size": 1353},
                                {"name": "ControlList", "size": 4665},
                                {"name": "DragControl", "size": 2649},
                                {"name": "ExpandControl", "size": 2832},
                                {"name": "HoverControl", "size": 4896},
                                {"name": "IControl", "size": 763},
                                {"name": "PanZoomControl", "size": 5222},
                                {"name": "SelectionControl", "size": 7862},
                                {"name": "TooltipControl", "size": 8435}
                            ]
                        },
                        {
                            "name": "data",
                            "children": [
                                {"name": "Data", "size": 20544},
                                {"name": "DataList", "size": 19788},
                                {"name": "DataSprite", "size": 10349},
                                {"name": "EdgeSprite", "size": 3301},
                                {"name": "NodeSprite", "size": 19382},
                                {
                                    "name": "render",
                                    "children": [
                                        {"name": "ArrowType", "size": 698},
                                        {"name": "EdgeRenderer", "size": 5569},
                                        {"name": "IRenderer", "size": 353},
                                        {"name": "ShapeRenderer", "size": 2247}
                                    ]
                                },
                                {"name": "ScaleBinding", "size": 11275},
                                {"name": "Tree", "size": 7147},
                                {"name": "TreeBuilder", "size": 9930}
                            ]
                        },
                        {
                            "name": "events",
                            "children": [
                                {"name": "DataEvent", "size": 2313},
                                {"name": "SelectionEvent", "size": 1880},
                                {"name": "TooltipEvent", "size": 1701},
                                {"name": "VisualizationEvent", "size": 1117}
                            ]
                        },
                        {
                            "name": "legend",
                            "children": [
                                {"name": "Legend", "size": 20859},
                                {"name": "LegendItem", "size": 4614},
                                {"name": "LegendRange", "size": 10530}
                            ]
                        },
                        {
                            "name": "operator",
                            "children": [
                                {
                                    "name": "distortion",
                                    "children": [
                                        {"name": "BifocalDistortion", "size": 4461},
                                        {"name": "Distortion", "size": 6314},
                                        {"name": "FisheyeDistortion", "size": 3444}
                                    ]
                                },
                                {
                                    "name": "encoder",
                                    "children": [
                                        {"name": "ColorEncoder", "size": 3179},
                                        {"name": "Encoder", "size": 4060},
                                        {"name": "PropertyEncoder", "size": 4138},
                                        {"name": "ShapeEncoder", "size": 1690},
                                        {"name": "SizeEncoder", "size": 1830}
                                    ]
                                },
                                {
                                    "name": "filter",
                                    "children": [
                                        {"name": "FisheyeTreeFilter", "size": 5219},
                                        {"name": "GraphDistanceFilter", "size": 3165},
                                        {"name": "VisibilityFilter", "size": 3509}
                                    ]
                                },
                                {"name": "IOperator", "size": 1286},
                                {
                                    "name": "label",
                                    "children": [
                                        {"name": "Labeler", "size": 9956},
                                        {"name": "RadialLabeler", "size": 3899},
                                        {"name": "StackedAreaLabeler", "size": 3202}
                                    ]
                                },
                                {
                                    "name": "layout",
                                    "children": [
                                        {"name": "AxisLayout", "size": 6725},
                                        {"name": "BundledEdgeRouter", "size": 3727},
                                        {"name": "CircleLayout", "size": 9317},
                                        {"name": "CirclePackingLayout", "size": 12003},
                                        {"name": "DendrogramLayout", "size": 4853},
                                        {"name": "ForceDirectedLayout", "size": 8411},
                                        {"name": "IcicleTreeLayout", "size": 4864},
                                        {"name": "IndentedTreeLayout", "size": 3174},
                                        {"name": "Layout", "size": 7881},
                                        {"name": "NodeLinkTreeLayout", "size": 12870},
                                        {"name": "PieLayout", "size": 2728},
                                        {"name": "RadialTreeLayout", "size": 12348},
                                        {"name": "RandomLayout", "size": 870},
                                        {"name": "StackedAreaLayout", "size": 9121},
                                        {"name": "TreeMapLayout", "size": 9191}
                                    ]
                                },
                                {"name": "Operator", "size": 2490},
                                {"name": "OperatorList", "size": 5248},
                                {"name": "OperatorSequence", "size": 4190},
                                {"name": "OperatorSwitch", "size": 2581},
                                {"name": "SortOperator", "size": 2023}
                            ]
                        },
                        {"name": "Visualization", "size": 16540}
                    ]
                }
            ]
          }];*/
///////////end this.data
}

click() {
  this.name = "faxette";
  console.log('faxette');
}

$onInit() {
  console.log('on init called on body');
  this.loading = true;
// this.timeout(()=>console.log(d3.selectAll("path").attr("stroke", "red")));

//;
 // console.log(d3.selectAll(".arc-container"));

  /*this.WebapiService
  .getValue()
  .then(result => {
    console.log(result);
    this.dataFromServer = result.data;
  }, error => {
    this.errorMessage = error;
    console.error(this.errorMessage);
  })
  .finally(() => {
    this.loading = false;
  });*/
}

}

// here you start the component in the same module, in this case  AnimalApp.
angular.module('AnimalApp').component('firstComponent', {
  template: require('./firstComponent.html'),
  bindings: {
    name: "@",
  },
  controllerAs: '$ctrl',
  controller: FirstComponentClass
});