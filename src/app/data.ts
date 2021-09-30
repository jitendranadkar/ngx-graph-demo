import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'first',
    label: 'A'
  }, {
    id: 'second',
    label: 'B'
  }, {
    id: 'c1',
    label: 'C1'
  }, {
    id: 'c2',
    label: 'C2'
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'c',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'first',
    target: 'c2',
    label: 'custom label'
  }
];



export const nodes2: Node[] = [
  {
    id: '1',
    label: 'A'
  }, {
    id: '2',
    label: 'B'
  }, {
    id: '3',
    label: 'C1'
  }, {
    id: '4',
    label: 'C2'
  },
 {
  id: '5',
  label: 'C1'
}, {
  id: '6',
  label: 'C2'
},
{
  id: '7',
  label: 'A'
}, {
  id: '8',
  label: 'B'
}, {
  id: '9',
  label: 'C1'
}, {
  id: '10',
  label: 'C2'
},
{
id: '11',
label: 'C1'
}, {
id: '12',
label: 'C2'
}
];



export const links2: Edge[] = [
  {
    id: 'a',
    source: '1',
    target: '2',
    label: 'is parent of'
  }, {
    id: 'b',
    source: '2',
    target: '3',
    label: 'custom label'
  }, {
    id: 'c',
    source: '2',
    target: '3',
    label: 'custom label'
  }, {
    id: 'd',
    source: '3',
    target: '4',
    label: 'custom label'
  },
  {
    id: 'e',
    source: '4',
    target: '5',
    label: 'is parent of'
  }, {
    id: 'f',
    source: '4',
    target: '6',
    label: 'custom label'
  }, {
    id: 'g',
    source: '4',
    target: '7',
    label: 'custom label'
  }, {
    id: 'h',
    source: '3',
    target: '7',
    label: 'custom label'
  },
  {
    id: 'i',
    source: '5',
    target: '6',
    label: 'is parent of'
  }, {
    id: 'j',
    source: '6',
    target: '10',
    label: 'custom label'
  }, {
    id: 'k',
    source: '10',
    target: '7',
    label: 'custom label'
  }, {
    id: 'l',
    source: '6',
    target: '12',
    label: 'custom label'
  }
];
