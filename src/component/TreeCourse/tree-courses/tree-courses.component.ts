import {FlatTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Course, Subbject } from '../../../classes/Course';
import { NodeCourse } from '../../../classes/Node';

const courses = [
    new Course("shufra",Subbject.QA,500,["קוגל","ita"]),
    new Course("wolf",Subbject.QA,500,["קוגל","ita"]),
    new Course("yashan",Subbject.QA,5000,["קוגל","ita"]),
    new Course("kodesh",Subbject.QA,500,["קוגל","yafi"])

    ];
const tonodeteacher=(_item:string)=>{return {name:_item}}

const toNode=(course:Course)=>{
  return  {
    name:course._nameCourse,
    chidren:[
      {name:course._subbject},
      {name:course.cost},
      {name:"teachers", childrens:course.teachers.map(item=>tonodeteacher(item))}

  ]}
}
const data = courses.map((item: Course)=>toNode(item));
const TREE_DATA: NodeCourse[] =data

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({ 
  selector: 'app-tree-courses',
  standalone: true,
  templateUrl: './tree-courses.component.html',
  styleUrl: './tree-courses.component.css',
imports: [MatTreeModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeCoursesComponent {

 

private _transformer = (node: NodeCourse, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
  };
};

treeControl = new FlatTreeControl<ExampleFlatNode>(
  node => node.level,
  node => node.expandable,
);

treeFlattener = new MatTreeFlattener(
  this._transformer,
  node => node.level,
  node => node.expandable,
  node => node.children,
);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

constructor() {
  this.dataSource.data = TREE_DATA;
}

hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}