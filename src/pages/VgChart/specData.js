import {cars} from './data';
export const spec1 = {
    $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
    width: 400,
    height: 200,
    title: 'Demo Chart',
    layer: [
        {
            mark: { type: 'area', color: '#e0e0e0', interpolate: 'monotone' },
            encoding: {
                x: {
                    field: 'date',
                    type: 'ordinal',
                    timeUnit: 'yearmonthdate',
                    axis: { title: 'Date', labelAngle: -45 },
                },
                y: {
                    field: 'user_comments',
                    type: 'quantitative',
                    axis: {
                        title: 'User Comments',
                        format: 'd',
                        values: [1, 2, 3],
                    },
                },
                stroke: {
                    field: 'symbol',
                    type: 'ordinal',
                    scale: {
                        domain: ['User Comments', 'Active Users'],
                        range: ['#e0e0e0', '#0084FF'],
                    },
                },
            },
        },
        {
            mark: { type: 'area', color: '#0084FF', interpolate: 'monotone' },
            encoding: {
                x: {
                    field: 'date',
                    type: 'ordinal',
                    timeUnit: 'yearmonthdate',
                    axis: { title: 'Date', labelAngle: -45 },
                },
                y: {
                    field: 'active_users',
                    type: 'quantitative',
                    axis: {
                        title: 'Active Users',
                        format: 'd',
                        values: [1, 2],
                    },
                },
            },
        },
    ],
    config: {
        legend: {
            offset: -106, // Adjust the horizontal distance of the legend
            title: null,
            padding: 5,
            strokeColor: '#9e9e9e',
            strokeWidth: 2,
            symbolType: 'stroke',
            symbolOffset: 0,
            symbolStrokeWidth: 10,
            labelOffset: 0,
            cornerRadius: 10,
            symbolSize: 100,
            clipHeight: 20,
        },
    },
};

export const data1 = [
    { "user_comments": 0, "active_users": 0, "date": "2019-10-01" },
    { "user_comments": 3, "active_users": 2, "date": "2019-10-02" },
    { "user_comments": 1, "active_users": 0, "date": "2019-10-03" },
    { "user_comments": 1, "active_users": 1, "date": "2019-10-04" },
    { "user_comments": 2, "active_users": 0, "date": "2019-10-05" },
    { "user_comments": 1, "active_users": 0, "date": "2019-10-06" },
    { "user_comments": 2, "active_users": 1, "date": "2019-10-07" }
]

export const spec2 = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": 400,
    "height": 200,
    "padding": 5,

    "data": [
        {
            "name": "table",
            "values": [
                { "category": "A", "amount": 28 },
                { "category": "B", "amount": 55 },
                { "category": "C", "amount": 43 },
                { "category": "D", "amount": 91 },
                { "category": "E", "amount": 81 },
                { "category": "F", "amount": 53 },
                { "category": "G", "amount": 19 },
                { "category": "H", "amount": 87 }
            ]
        }
    ],

    "signals": [
        {
            "name": "tooltip",
            "value": {},
            // "on": [
            //     { "events": "rect:mouseover", "update": "datum" },
            //     { "events": "rect:mouseout", "update": "{}" }
            // ]
        }
    ],

    "scales": [
        {
            "name": "xscale",
            "type": "band",
            "domain": { "data": "table", "field": "category" },
            "range": "width",
            "padding": 0.05,
            "round": true
        },
        {
            "name": "yscale",
            "domain": { "data": "table", "field": "amount" },
            "nice": true,
            "range": "height"
        }
    ],

    "axes": [
        { "orient": "bottom", "scale": "xscale" },
        { "orient": "left", "scale": "yscale" }
    ],

    "marks": [
        {
            "type": "rect",
            "from": { "data": "table" },
            "encode": {
                "enter": {
                    "x": { "scale": "xscale", "field": "category" },
                    "width": { "scale": "xscale", "band": 1 },
                    "y": { "scale": "yscale", "field": "amount" },
                    "y2": { "scale": "yscale", "value": 0 }
                },
                "update": {
                    "fill": { "value": "steelblue" }
                },
                "hover": {
                    "fill": { "value": "red" }
                }
            }
        },
        {
            "type": "text",
            "encode": {
                "enter": {
                    "align": { "value": "center" },
                    "baseline": { "value": "bottom" },
                    "fill": { "value": "#333" }
                },
                "update": {
                    "x": { "scale": "xscale", "signal": "tooltip.category", "band": 0.5 },
                    "y": { "scale": "yscale", "signal": "tooltip.amount", "offset": -2 },
                    "text": { "signal": "tooltip.amount" },
                    "fillOpacity": [
                        { "test": "isNaN(tooltip.amount)", "value": 0 },
                        { "value": 1 }
                    ]
                }
            }
        }
    ]
}

export const spec3 = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A contour plot example, overlaying a density estimate on scatter plot points.",
    "width": 500,
    "height": 400,
    "padding": 5,
    "autosize": "pad",
  
    "signals": [
      {
        "name": "bandwidth", "value": -1,
        "bind": {"input": "range", "min": -1, "max": 100, "step": 1}
      },
      {
        "name": "resolve", "value": "shared",
        "bind": {"input": "select", "options": ["independent", "shared"]}
      },
      {
        "name": "counts", "value": true,
        "bind": {"input": "checkbox"}
      }
    ],
  
    "data": [
        {
            "name": "source",
            "values": cars,
            // "url": "./cars.json", //firing api localhost:3000/cars.json
            "transform": [
                {
                  "type": "filter",
                  "expr": "datum.Horsepower != null && datum.Miles_per_Gallon != null"
                }
              ]
        },
      {
        "name": "density",
        "source": "source",
        "transform": [
          {
            "type": "kde2d",
            "groupby": ["Origin"],
            "size": [{"signal": "width"}, {"signal": "height"}],
            "x": {"expr": "scale('x', datum.Horsepower)"},
            "y": {"expr": "scale('y', datum.Miles_per_Gallon)"},
            "bandwidth": {"signal": "[bandwidth, bandwidth]"},
            "counts": {"signal": "counts"}
          }
        ]
      },
      {
        "name": "contours",
        "source": "density",
        "transform": [
          {
            "type": "isocontour",
            "field": "grid",
            "resolve": {"signal": "resolve"},
            "levels": 3
          }
        ]
      }
    ],
  
    "scales": [
      {
        "name": "x",
        "type": "linear",
        "round": true,
        "nice": true,
        "zero": true,
        "domain": {"data": "source", "field": "Horsepower"},
        "range": "width"
      },
      {
        "name": "y",
        "type": "linear",
        "round": true,
        "nice": true,
        "zero": true,
        "domain": {"data": "source", "field": "Miles_per_Gallon"},
        "range": "height"
      },
      {
        "name": "color",
        "type": "ordinal",
        "domain": {
          "data": "source", "field": "Origin",
          "sort": {"order": "descending"}
        },
        "range": "category"
      }
    ],
  
    "axes": [
      {
        "scale": "x",
        "grid": true,
        "domain": false,
        "orient": "bottom",
        "tickCount": 5,
        "title": "Horsepower"
      },
      {
        "scale": "y",
        "grid": true,
        "domain": false,
        "orient": "left",
        "titlePadding": 5,
        "title": "Miles_per_Gallon"
      }
    ],
  
    "legends": [
      {"stroke": "color", "symbolType": "stroke"}
    ],
  
    "marks": [
      {
        "name": "marks",
        "type": "symbol",
        "from": {"data": "source"},
        "encode": {
          "update": {
            "x": {"scale": "x", "field": "Horsepower"},
            "y": {"scale": "y", "field": "Miles_per_Gallon"},
            "size": {"value": 4},
            "fill": {"value": "#ccc"}
          }
        }
      },
      {
        "type": "image",
        "from": {"data": "density"},
        "encode": {
          "update": {
            "x": {"value": 0},
            "y": {"value": 0},
            "width": {"signal": "width"},
            "height": {"signal": "height"},
            "aspect": {"value": false}
          }
        },
        "transform": [
          {
            "type": "heatmap",
            "field": "datum.grid",
            "resolve": {"signal": "resolve"},
            "color": {"expr": "scale('color', datum.datum.Origin)"}
          }
        ]
      },
      {
        "type": "path",
        "clip": true,
        "from": {"data": "contours"},
        "encode": {
          "enter": {
            "strokeWidth": {"value": 1},
            "strokeOpacity": {"value": 1},
            "stroke": {"scale": "color", "field": "Origin"}
          }
        },
        "transform": [
          { "type": "geopath", "field": "datum.contour" }
        ]
      }
    ]
  }