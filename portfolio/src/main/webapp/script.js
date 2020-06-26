// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {  // eslint-disable-line
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
function getJson() {
  fetch('/data').then((response) => response.text()).then((json) => {
    document.getElementById('name-container').innerText = json;
  });
}
/** Comments will not post to screen but are being stored. */
function loadTasks() {
  fetch('/data').then(response => response.json()).then((tasks) => {
    const taskListElement = document.getElementById('task-list');

    tasks.forEach((task) => {
      taskListElement.appendChild(createTaskElement(task));
      console.log(tasks);
    })
    console.log(tasks);
  });
}

/** Creates an element that represents a task */
function createTaskElement(task) {
  const taskElement = document.createElement('li');
  taskElement.className = 'task';

  const titleElement = document.createElement('span');
  titleElement.innerText = task.title;
  taskElement.appendChild(titleElement);
  return taskElement;
}

var topbutton = document.getElementById('topbutton');
window.onscroll = function() {
  scrollFunction()
};

/**Creates a scroll function that shows the button after user scrolls 20px */
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = 'compact';
  } else {
    topbutton.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}
